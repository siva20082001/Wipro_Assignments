import React, { Component } from "react";

class FlightBookingControlled extends Component {
  constructor(props) {
    super(props);
    // ✅ Controlled Component: Using state for form fields (Requirement 1)
    this.state = {
      passengerName: "",   // Passenger Name (text)
      email: "",           // Email (text)
      gender: "",          // Gender (radio: Male/Female)
      meal: "Veg",         // Meal Preference (dropdown, default Veg)
      request: "",         // Special Request (textarea)
      submitted: false     // Flag to show submitted data in table
    };
  }

  // ✅ Handle input changes and update state (Requirement 1: controlled inputs)
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true }); // Mark form as submitted
  };

  render() {
    return (
      <div className="container">
        <h3>Controlled Flight Booking Form</h3>

        {/* ✅ Controlled Form - inputs use value from state */}
        <form onSubmit={this.handleSubmit}>
          {/* Passenger Name */}
          <div className="mb-3">
            <label className="form-label">Passenger Name</label>
            <input
              type="text"
              className="form-control"
              name="passengerName"
              value={this.state.passengerName}
              onChange={this.handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          {/* Gender - Radio buttons */}
          <div className="mb-3">
            <label className="form-label">Gender</label><br />
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleChange}
            /> Male
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleChange}
              className="ms-2"
            /> Female
          </div>

          {/* Meal Preference */}
          <div className="mb-3">
            <label className="form-label">Meal Preference</label>
            <select
              className="form-control"
              name="meal"
              value={this.state.meal}
              onChange={this.handleChange}
            >
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>

          {/* Special Request */}
          <div className="mb-3">
            <label className="form-label">Special Request</label>
            <textarea
              className="form-control"
              name="request"
              value={this.state.request}
              onChange={this.handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {/* ✅ Display submitted data in a Bootstrap Table (Requirement 1) */}
        {this.state.submitted && (
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Passenger Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Meal</th>
                <th>Request</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.passengerName}</td>
                <td>{this.state.email}</td>
                <td>{this.state.gender}</td>
                <td>{this.state.meal}</td>
                <td>{this.state.request}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default FlightBookingControlled;
