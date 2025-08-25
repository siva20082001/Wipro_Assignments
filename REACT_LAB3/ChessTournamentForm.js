/*
  ChessTournamentForm.jsx
  -----------------------
  A fully self‑contained React component that builds a Chess Tournament
  registration form using Formik (forms), Yup (validation), and Bootstrap (styling).

  ✅ Meets the lab requirements:
     • Validates all fields (incl. conditional rules for age & parent contact)
     • Logs submitted data to console
     • Displays each submission in a Bootstrap table (multiple rows)
     • Resets the form after successful submit
     • Shows error messages under fields via <ErrorMessage>

  NOTE: Every line below is commented so you can understand what it does.
*/

// ------------------------- Imports -------------------------
import React, { useMemo, useState } from "react"; // React core + hooks for state and memoized values
import { Formik, Form, Field, ErrorMessage } from "formik"; // Formik building blocks
import * as Yup from "yup"; // Yup for validation schema
import "bootstrap/dist/css/bootstrap.min.css"; // Bring in Bootstrap styles (works with CRA/Vite)

// ------------------------- Small Helpers -------------------------
// A tiny helper to convert a JS Date to an 'YYYY-MM-DD' string for <input type="date"> limits
const toISODate = (date) => date.toISOString().slice(0, 10);

// Compute age in whole years given a 'YYYY-MM-DD' date string
const getAge = (dobString) => {
  // If date is missing, return NaN so we can fail validation gracefully
  if (!dobString) return NaN;
  const today = new Date(); // current date
  const dob = new Date(dobString); // user's date of birth
  let age = today.getFullYear() - dob.getFullYear(); // rough year difference
  const m = today.getMonth() - dob.getMonth(); // how many months ahead/behind
  // If we haven't reached the birthday yet this year, subtract 1 from age
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age; // final age in years
};

// A reusable regex for 10-digit Indian-style mobile numbers starting with 6-9
const MOBILE_REGEX = /^[6-9]\d{9}$/; // ^ start, [6-9] first digit, \d{9} nine digits, $ end

// Exactly 8 digits for FIDE ID (no spaces/letters)
const FIDE_ID_REGEX = /^\d{8}$/; // eight numbers only

// ------------------------- Main Component -------------------------
export default function ChessTournamentForm() {
  // Keep all submitted rows in local component state so each submit appends
  const [rows, setRows] = useState([]); // starts empty; each submit pushes one object

  // Calculate DOB limits: users must be between 5 and 90 years old
  // We memoize so these values don't recompute on every render for no reason
  const { minDobISO, maxDobISO } = useMemo(() => {
    const today = new Date(); // current date
    // Max allowed DOB is 5 years ago (i.e., youngest age is 5)
    const maxDob = new Date(
      today.getFullYear() - 5,
      today.getMonth(),
      today.getDate()
    );
    // Min allowed DOB is 90 years ago (i.e., oldest age is 90)
    const minDob = new Date(
      today.getFullYear() - 90,
      today.getMonth(),
      today.getDate()
    );
    // Convert both to ISO strings usable in <input type="date" min/max>
    return { minDobISO: toISODate(minDob), maxDobISO: toISODate(maxDob) };
  }, []);

  // Initial form field values when the form first loads or after reset
  const initialValues = {
    playerName: "", // player's full name
    dob: "", // date of birth as 'YYYY-MM-DD'
    gender: "", // one of 'Male' | 'Female' | 'Other'
    fideId: "", // exactly 8 digits
    rating: "", // numeric rating (string input; Yup will coerce/validate number)
    email: "", // contact email
    mobile: "", // 10-digit mobile starting with 6-9
    country: "", // country name or selection
    category: "", // one of 'Under 12' | 'Under 18' | 'Open'
    parentContact: "", // shown/required only for 'Under 12'
    paymentConfirmed: false, // must be true (checkbox)
    terms: false, // must be true (checkbox)
  };

  // Yup validation schema expressing all the business rules
  const validationSchema = Yup.object({
    // Player name: at least 3 characters
    playerName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Player name is required"),

    // DOB: required and age must be 5–90 years inclusive
    dob: Yup.string()
      .required("Date of Birth is required")
      .test("age-range", "Age must be between 5 and 90", (value) => {
        const age = getAge(value);
        return age >= 5 && age <= 90; // true passes, false fails
      }),

    // Gender must be one of the listed options
    gender: Yup.string()
      .oneOf(["Male", "Female", "Other"], "Please select a valid gender")
      .required("Gender is required"),

    // FIDE ID: exactly 8 digits, no spaces/letters
    fideId: Yup.string()
      .matches(FIDE_ID_REGEX, "FIDE ID must be exactly 8 digits")
      .required("FIDE ID is required"),

    // Rating: numeric between 100 and 3000
    rating: Yup.number()
      .typeError("Rating must be a number") // when the input isn't numeric
      .min(100, "Rating must be at least 100")
      .max(3000, "Rating cannot exceed 3000")
      .required("Rating is required"),

    // Email: valid format and required
    email: Yup.string().email("Invalid email").required("Email is required"),

    // Mobile: 10 digits, starts with 6-9
    mobile: Yup.string()
      .matches(MOBILE_REGEX, "Enter a valid 10-digit mobile starting with 6-9")
      .required("Mobile number is required"),

    // Country: required (use a simple text or select)
    country: Yup.string().required("Country is required"),

    // Category: must be one of these three
    category: Yup.string()
      .oneOf(["Under 12", "Under 18", "Open"], "Select a valid category")
      .required("Category is required"),

    // Parent Contact: required ONLY if category is 'Under 12'
    parentContact: Yup.string().when("category", {
      is: "Under 12", // when this condition is true...
      then: (schema) =>
        schema
          .matches(MOBILE_REGEX, "Enter a valid 10-digit parent contact")
          .required("Parent contact is required for Under 12"), // ...require it
      otherwise: (schema) => schema.notRequired(), // otherwise optional
    }),

    // Payment must be confirmed (checkbox)
    paymentConfirmed: Yup.bool().oneOf(
      [true],
      "Please confirm that payment has been made"
    ),

    // Terms must be accepted (checkbox)
    terms: Yup.bool().oneOf([true], "You must accept the Terms & Conditions"),
  });

  // What to do when the form is submitted successfully
  const handleSubmit = (values, { resetForm }) => {
    // 1) Log the data to the browser console (lab requirement)
    console.log("Registration Data:", values);
    // 2) Append the new row into our state table
    setRows((prev) => [...prev, values]);
    // 3) Reset the form back to initial values (lab requirement)
    resetForm();
  };

  // ------------------------- UI (JSX) -------------------------
  return (
    // Bootstrap container provides nice centered padding
    <div className="container py-4">
      {/* Page Title */}
      <h1 className="mb-4">Chess Tournament Registration</h1>

      {/* Formik wrapper wires up initial values, validation, and submit handler */}
      <Formik
        initialValues={initialValues} // starting values for each field
        validationSchema={validationSchema} // Yup rules defined above
        onSubmit={handleSubmit} // what happens on submit
      >
        {({ values }) => (
          // Formik's <Form> component replaces the native <form>
          <Form className="row g-3">{/* g-3 adds gutters between grid items */}
            {/* Player Name */}
            <div className="col-md-6">
              <label className="form-label">
                Player Name <span className="text-danger">*</span>
              </label>
              <Field
                name="playerName" // connects input to Formik state
                type="text" // plain text input
                className="form-control" // Bootstrap input styling
                placeholder="e.g., Arjun Mehta" // hint text
              />
              <div className="text-danger small">
                <ErrorMessage name="playerName" />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="col-md-6">
              <label className="form-label">
                Date of Birth <span className="text-danger">*</span>
              </label>
              <Field
                name="dob"
                type="date" // HTML date picker
                className="form-control"
                min={minDobISO} // prevent dates older than 90 years
                max={maxDobISO} // prevent dates younger than 5 years
              />
              <div className="text-danger small">
                <ErrorMessage name="dob" />
              </div>
            </div>

            {/* Gender (radio buttons for three options) */}
            <div className="col-md-6">
              <label className="form-label d-block">
                Gender <span className="text-danger">*</span>
              </label>
              <div className="form-check form-check-inline">
                <Field
                  type="radio"
                  name="gender"
                  value="Male"
                  id="genderMale"
                  className="form-check-input"
                />
                <label htmlFor="genderMale" className="form-check-label">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <Field
                  type="radio"
                  name="gender"
                  value="Female"
                  id="genderFemale"
                  className="form-check-input"
                />
                <label htmlFor="genderFemale" className="form-check-label">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <Field
                  type="radio"
                  name="gender"
                  value="Other"
                  id="genderOther"
                  className="form-check-input"
                />
                <label htmlFor="genderOther" className="form-check-label">
                  Other
                </label>
              </div>
              <div className="text-danger small">
                <ErrorMessage name="gender" />
              </div>
            </div>

            {/* FIDE ID */}
            <div className="col-md-6">
              <label className="form-label">
                FIDE ID (8 digits) <span className="text-danger">*</span>
              </label>
              <Field
                name="fideId"
                type="text"
                inputMode="numeric" // brings numeric keypad on mobile
                className="form-control"
                placeholder="e.g., 12345678"
              />
              <div className="text-danger small">
                <ErrorMessage name="fideId" />
              </div>
            </div>

            {/* Rating */}
            <div className="col-md-6">
              <label className="form-label">
                Rating (100 - 3000) <span className="text-danger">*</span>
              </label>
              <Field
                name="rating"
                type="number" // numeric field
                className="form-control"
                placeholder="e.g., 1520"
                min={100}
                max={3000}
              />
              <div className="text-danger small">
                <ErrorMessage name="rating" />
              </div>
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <Field
                name="email"
                type="email"
                className="form-control"
                placeholder="e.g., arjun.mehta@example.com"
              />
              <div className="text-danger small">
                <ErrorMessage name="email" />
              </div>
            </div>

            {/* Mobile */}
            <div className="col-md-6">
              <label className="form-label">
                Mobile (10 digits) <span className="text-danger">*</span>
              </label>
              <Field
                name="mobile"
                type="text"
                inputMode="numeric"
                className="form-control"
                placeholder="e.g., 9876543210"
                maxLength={10}
              />
              <div className="text-danger small">
                <ErrorMessage name="mobile" />
              </div>
            </div>

            {/* Country */}
            <div className="col-md-6">
              <label className="form-label">
                Country <span className="text-danger">*</span>
              </label>
              <Field as="select" name="country" className="form-select">
                <option value="">-- Select Country --</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Other">Other</option>
              </Field>
              <div className="text-danger small">
                <ErrorMessage name="country" />
              </div>
            </div>

            {/* Category */}
            <div className="col-md-6">
              <label className="form-label">
                Category <span className="text-danger">*</span>
              </label>
              <Field as="select" name="category" className="form-select">
                <option value="">-- Select Category --</option>
                <option value="Under 12">Under 12</option>
                <option value="Under 18">Under 18</option>
                <option value="Open">Open</option>
              </Field>
              <div className="text-danger small">
                <ErrorMessage name="category" />
              </div>
            </div>

            {/* Parent Contact (conditionally shown only for 'Under 12') */}
            {values.category === "Under 12" && (
              <div className="col-md-6">
                <label className="form-label">
                  Parent Contact (10 digits) <span className="text-danger">*</span>
                </label>
                <Field
                  name="parentContact"
                  type="text"
                  inputMode="numeric"
                  className="form-control"
                  placeholder="e.g., 9876543210"
                  maxLength={10}
                />
                <div className="text-danger small">
                  <ErrorMessage name="parentContact" />
                </div>
              </div>
            )}

            {/* Payment Confirmation Checkbox */}
            <div className="col-12">
              <div className="form-check">
                <Field
                  type="checkbox"
                  name="paymentConfirmed"
                  id="paymentConfirmed"
                  className="form-check-input"
                />
                <label htmlFor="paymentConfirmed" className="form-check-label">
                  I confirm the payment has been made
                </label>
              </div>
              <div className="text-danger small">
                <ErrorMessage name="paymentConfirmed" />
              </div>
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="col-12">
              <div className="form-check">
                <Field
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="form-check-input"
                />
                <label htmlFor="terms" className="form-check-label">
                  I agree to the Terms & Conditions
                </label>
              </div>
              <div className="text-danger small">
                <ErrorMessage name="terms" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Register Player
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Submitted data table (appears after the first successful submit) */}
      {rows.length > 0 && (
        <div className="mt-5">
          <h2 className="h4 mb-3">Submitted Players</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Player Name</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>FIDE ID</th>
                  <th>Rating</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Country</th>
                  <th>Category</th>
                  <th>Parent Contact</th>
                  <th>Payment</th>
                  <th>Terms</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => (
                  // Using the index as key is acceptable here because the table is append-only
                  <tr key={idx}>
                    <td>{idx + 1}</td>{/* row number starting at 1 */}
                    <td>{r.playerName}</td>
                    <td>{r.dob}</td>
                    <td>{r.gender}</td>
                    <td>{r.fideId}</td>
                    <td>{r.rating}</td>
                    <td>{r.email}</td>
                    <td>{r.mobile}</td>
                    <td>{r.country}</td>
                    <td>{r.category}</td>
                    <td>{r.parentContact || "-"}</td>{/* dash if empty */}
                    <td>{r.paymentConfirmed ? "true" : "false"}</td>
                    <td>{r.terms ? "true" : "false"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/*
  How to use this file in your project:
  ------------------------------------
  1) Install deps: npm i formik yup bootstrap
  2) Put this file as src/ChessTournamentForm.jsx
  3) Render it from your App component like:

     import ChessTournamentForm from './ChessTournamentForm';
     export default function App(){
       return <ChessTournamentForm />;
     }

  That's it. Open the console to see the logged registration data after each submit.
*/
