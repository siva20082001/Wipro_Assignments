// HockeyTournamentForm.js
// -------------------------------------------------
// This component implements the Hockey Tournament Registration Form
// using Formik (for form handling) + Yup (for validation)
// and Bootstrap (for styling + table layout).

// 1. Import React core library (must be present in every React component file)
import React, { useState } from "react";

// 2. Import Formik and supporting components
//    - Formik: main form manager
//    - Form: wrapper for <form>
//    - Field: input field binding
//    - ErrorMessage: to show validation error messages
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

// 3. Import Yup for validation schema
import * as Yup from "yup";

// -------------------------------------------------
// Component starts here
function HockeyTournamentForm() {
  // 4. State hook for storing submitted players (table rows)
  //    - useState([]): start with an empty array
  //    - setSubmittedData: function to update state
  const [submittedData, setSubmittedData] = useState([]);

  // 5. Define initialValues (default form values when form loads)
  const initialValues = {
    playerName: "",
    jerseyNumber: "",
    position: "",
    stickHand: "",
    dateOfBirth: "",
    nationality: "",
    email: "",
    phone: "",
    playerId: "",
    guardianName: "",
    teamName: "",
    leagueLevel: "",
    tournamentName: "",
    startDate: "",
    endDate: "",
    jerseySize: "",
    padSize: "",
    hasMedicalCondition: false,
    medicalCertNumber: "",
    consent: false,
    pastTeams: [], // empty array (user can add max 3)
  };

  // 6. Validation schema using Yup
  const validationSchema = Yup.object({
    // Player details validations
    playerName: Yup.string()
      .matches(/^[A-Za-z ]+$/, "Only alphabets and spaces allowed")
      .min(3, "At least 3 characters")
      .max(40, "Max 40 characters")
      .required("Player name is required"),

    jerseyNumber: Yup.number()
      .min(1, "Must be between 1 and 99")
      .max(99, "Must be between 1 and 99")
      .required("Jersey number is required"),

    position: Yup.string().required("Position is required"),

    stickHand: Yup.string().required("Stick hand is required"),

    dateOfBirth: Yup.date()
      .required("Date of birth is required")
      .test("age-limit", "Age must be between 10 and 55", function (value) {
        if (!value) return false;
        const today = new Date();
        const dob = new Date(value);
        const age = today.getFullYear() - dob.getFullYear();
        return age >= 10 && age <= 55;
      }),

    nationality: Yup.string().required("Nationality is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Invalid Indian phone number")
      .required("Phone is required"),

    playerId: Yup.string()
      .matches(/^HOCK-\d+$/, "Format HOCK-XXXX required")
      .required("Player ID is required"),

    guardianName: Yup.string().when("dateOfBirth", (dob, schema) => {
      if (dob) {
        const today = new Date();
        const age = today.getFullYear() - new Date(dob).getFullYear();
        if (age < 18) {
          return schema.required("Guardian name is required if age < 18");
        }
      }
      return schema;
    }),

    // Team info
    teamName: Yup.string().required("Team name is required"),
    leagueLevel: Yup.string().required("League level is required"),
    tournamentName: Yup.string().required("Tournament name is required"),
    startDate: Yup.date().required("Start date is required"),
    endDate: Yup.date()
      .required("End date is required")
      .min(Yup.ref("startDate"), "End date must be after start date"),

    jerseySize: Yup.string().when("position", {
      is: (val) => val && val !== "Goalie",
      then: (schema) => schema.required("Jersey size is required"),
    }),

    padSize: Yup.string().when("position", {
      is: "Goalie",
      then: (schema) => schema.required("Pad size is required"),
    }),

    // Medical & consent
    hasMedicalCondition: Yup.boolean(),
    medicalCertNumber: Yup.string().when("hasMedicalCondition", {
      is: true,
      then: (schema) =>
        schema
          .matches(/^MED-\d+$/, "Format MED-XXXX required")
          .required("Medical cert number is required"),
    }),

    consent: Yup.boolean()
      .oneOf([true], "Consent must be checked to submit")
      .required("Consent is required"),

    // Past teams
    pastTeams: Yup.array().of(
      Yup.object({
        clubName: Yup.string()
          .min(2, "At least 2 characters")
          .max(30, "Max 30 characters")
          .required("Club name is required"),
        years: Yup.number()
          .min(1, "Min 1 year")
          .max(20, "Max 20 years")
          .required("Years are required"),
      })
    ),
  });

  // 7. onSubmit handler
  const onSubmit = (values, { resetForm }) => {
    console.log("Form data: ", values); // log to console
    setSubmittedData([...submittedData, values]); // add to table
    resetForm(); // clear form
  };

  // 8. Return JSX
  return (
    <div className="card shadow p-4">
      <h2 className="mb-4">Hockey Tournament Registration</h2>

      {/* Formik wrapper */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {/* Render-props pattern */}
        {({ values }) => (
          <Form>
            {/* ---------------- PLAYER DETAILS ---------------- */}
            <h4>Player Details</h4>
            <div className="row">
              {/* Player Name */}
              <div className="col-md-6 mb-3">
                <label>Player Name</label>
                <Field name="playerName" className="form-control" />
                <ErrorMessage
                  name="playerName"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Jersey Number */}
              <div className="col-md-6 mb-3">
                <label>Jersey Number</label>
                <Field
                  name="jerseyNumber"
                  type="number"
                  className="form-control"
                />
                <ErrorMessage
                  name="jerseyNumber"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            {/* Position + Stick Hand */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Position</label>
                <Field as="select" name="position" className="form-control">
                  <option value="">Select</option>
                  <option value="Forward">Forward</option>
                  <option value="Defense">Defense</option>
                  <option value="Goalie">Goalie</option>
                </Field>
                <ErrorMessage
                  name="position"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Stick Hand</label>
                <Field as="select" name="stickHand" className="form-control">
                  <option value="">Select</option>
                  <option value="Left">Left</option>
                  <option value="Right">Right</option>
                </Field>
                <ErrorMessage
                  name="stickHand"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="mb-3">
              <label>Date of Birth</label>
              <Field type="date" name="dateOfBirth" className="form-control" />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Nationality */}
            <div className="mb-3">
              <label>Nationality</label>
              <Field name="nationality" className="form-control" />
              <ErrorMessage
                name="nationality"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Email + Phone */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Email</label>
                <Field name="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Phone</label>
                <Field name="phone" className="form-control" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            {/* Player ID */}
            <div className="mb-3">
              <label>Player ID</label>
              <Field name="playerId" className="form-control" />
              <ErrorMessage
                name="playerId"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Guardian Name */}
            <div className="mb-3">
              <label>Guardian Name (if under 18)</label>
              <Field name="guardianName" className="form-control" />
              <ErrorMessage
                name="guardianName"
                component="div"
                className="text-danger"
              />
            </div>

            {/* ---------------- TEAM INFO ---------------- */}
            <h4>Team & Event Information</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Team Name</label>
                <Field name="teamName" className="form-control" />
                <ErrorMessage
                  name="teamName"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>League Level</label>
                <Field as="select" name="leagueLevel" className="form-control">
                  <option value="">Select</option>
                  <option value="Amateur">Amateur</option>
                  <option value="College">College</option>
                  <option value="Pro">Pro</option>
                </Field>
                <ErrorMessage
                  name="leagueLevel"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            {/* Tournament */}
            <div className="mb-3">
              <label>Tournament Name</label>
              <Field name="tournamentName" className="form-control" />
              <ErrorMessage
                name="tournamentName"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Dates */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Start Date</label>
                <Field type="date" name="startDate" className="form-control" />
                <ErrorMessage
                  name="startDate"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>End Date</label>
                <Field type="date" name="endDate" className="form-control" />
                <ErrorMessage
                  name="endDate"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            {/* Jersey Size or Pad Size */}
            {values.position !== "Goalie" && (
              <div className="mb-3">
                <label>Jersey Size</label>
                <Field name="jerseySize" className="form-control" />
                <ErrorMessage
                  name="jerseySize"
                  component="div"
                  className="text-danger"
                />
              </div>
            )}

            {values.position === "Goalie" && (
              <div className="mb-3">
                <label>Pad Size</label>
                <Field name="padSize" className="form-control" />
                <ErrorMessage
                  name="padSize"
                  component="div"
                  className="text-danger"
                />
              </div>
            )}

            {/* ---------------- MEDICAL ---------------- */}
            <h4>Medical & Consent</h4>
            <div className="form-check mb-3">
              <Field
                type="checkbox"
                name="hasMedicalCondition"
                className="form-check-input"
              />
              <label className="form-check-label">
                Has Medical Condition
              </label>
            </div>

            {values.hasMedicalCondition && (
              <div className="mb-3">
                <label>Medical Certificate Number</label>
                <Field name="medicalCertNumber" className="form-control" />
                <ErrorMessage
                  name="medicalCertNumber"
                  component="div"
                  className="text-danger"
                />
              </div>
            )}

            <div className="form-check mb-3">
              <Field
                type="checkbox"
                name="consent"
                className="form-check-input"
              />
              <label className="form-check-label">
                I agree and give consent
              </label>
              <ErrorMessage
                name="consent"
                component="div"
                className="text-danger"
              />
            </div>

            {/* ---------------- PAST TEAMS ---------------- */}
            <h4>Past Teams (max 3)</h4>
            <FieldArray name="pastTeams">
              {({ push, remove }) => (
                <div>
                  {values.pastTeams.map((team, index) => (
                    <div key={index} className="row mb-2">
                      <div className="col-md-5">
                        <Field
                          name={`pastTeams[${index}].clubName`}
                          placeholder="Club Name"
                          className="form-control"
                        />
                        <ErrorMessage
                          name={`pastTeams[${index}].clubName`}
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="col-md-3">
                        <Field
                          type="number"
                          name={`pastTeams[${index}].years`}
                          placeholder="Years"
                          className="form-control"
                        />
                        <ErrorMessage
                          name={`pastTeams[${index}].years`}
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="col-md-2">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => remove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  {values.pastTeams.length < 3 && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => push({ clubName: "", years: "" })}
                    >
                      Add Past Team
                    </button>
                  )}
                </div>
              )}
            </FieldArray>

            {/* ---------------- BUTTONS ---------------- */}
            <div className="mt-3">
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* ---------------- SUBMITTED DATA TABLE ---------------- */}
      <h4 className="mt-4">Submitted Players</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Jersey Number</th>
            <th>Position</th>
            <th>Stick Hand</th>
            <th>Date of Birth</th>
            <th>Nationality</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Player ID</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((player, index) => (
            <tr key={index}>
              <td>{player.playerName}</td>
              <td>{player.jerseyNumber}</td>
              <td>{player.position}</td>
              <td>{player.stickHand}</td>
              <td>{player.dateOfBirth}</td>
              <td>{player.nationality}</td>
              <td>{player.email}</td>
              <td>{player.phone}</td>
              <td>{player.playerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 9. Export component so App.js can use it
export default HockeyTournamentForm;
