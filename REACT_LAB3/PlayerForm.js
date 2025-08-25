import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const PlayerForm = ({ fetchPlayers, editPlayer, setEditPlayer }) => {
  const initialValues = editPlayer || {
    name: "",
    age: "",
    position: "",
    club: "",
    nationality: "",
    goals: "",
    matchesPlayed: "",
    jerseyNumber: "",
    email: "",
    contactNumber: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Required"),
    age: Yup.number().min(16).max(40).required("Required"),
    position: Yup.string().oneOf(["Forward", "Midfielder", "Defender", "Goalkeeper"]).required("Required"),
    club: Yup.string().required("Required"),
    nationality: Yup.string().required("Required"),
    goals: Yup.number().min(0).max(100).required("Required"),
    matchesPlayed: Yup.number().min(1).required("Required"),
    jerseyNumber: Yup.number().min(1).max(99).required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    contactNumber: Yup.string().matches(/^\d{10}$/, "Must be 10 digits").required("Required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (editPlayer) {
      await axios.put(`http://localhost:5000/players/${editPlayer.id}`, values);
      setEditPlayer(null);
    } else {
      await axios.post("http://localhost:5000/players", values);
    }
    fetchPlayers();
    resetForm();
  };

  return (
    <div className="card p-3 shadow">
      <h3>{editPlayer ? "Edit Player" : "Add Player"}</h3>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} enableReinitialize>
        <Form>
          {["name", "age", "position", "club", "nationality", "goals", "matchesPlayed", "jerseyNumber", "email", "contactNumber"].map((field) => (
            <div className="mb-3" key={field}>
              <label className="form-label">{field}</label>
              <Field name={field} className="form-control" />
              <ErrorMessage name={field} component="div" className="text-danger" />
            </div>
          ))}
          <button type="submit" className="btn btn-success me-2">Save</button>
          {editPlayer && <button type="button" className="btn btn-secondary" onClick={() => setEditPlayer(null)}>Cancel</button>}
        </Form>
      </Formik>
    </div>
  );
};

export default PlayerForm;
