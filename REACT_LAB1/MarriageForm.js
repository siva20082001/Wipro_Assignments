import React, { Component } from "react";

// MarriageForm is a CLASS COMPONENT (requirement)
class MarriageForm extends Component {
  constructor(props) {
    super(props);
    // ✅ Component state stores multiple form fields
    this.state = {
      brideName: "",   // stores Bride Name input
      groomName: "",   // stores Groom Name input
      date: "",        // stores Marriage Date input
      venue: "",       // stores Venue input
      submitted: false, // flag to track if form is submitted
    };
  }

  // ✅ handleChange updates the state dynamically as user types
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // e.target.name ensures correct field is updated (brideName, groomName, date, venue)
  };

  // ✅ handleSubmit prevents page reload and marks form as submitted
  handleSubmit = (e) => {
    e.preventDefault(); 
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className="container mt-4"> {/* ✅ Bootstrap container for layout */}
        <div className="card p-4">      {/* ✅ Bootstrap card for styling */}
          <h3 className="text-center">Marriage Form</h3>

          {/* ✅ Form to collect Marriage details */}
          <form onSubmit={this.handleSubmit}>
            
            {/* Bride Name field */}
            <div className="form-group mb-3"> {/* ✅ Bootstrap form-group */}
              <label>Bride Name</label>
              <input
                type="text"
                className="form-control"   // ✅ Bootstrap input style
                name="brideName"           // field name matches state key
                value={this.state.brideName} // controlled component
                onChange={this.handleChange} // updates state
                required                   // ensures input is mandatory
              />
            </div>

            {/* Groom Name field */}
            <div className="form-group mb-3">
              <label>Groom Name</label>
              <input
                type="text"
                className="form-control"
                name="groomName"
                value={this.state.groomName}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Marriage Date field */}
            <div className="form-group mb-3">
              <label>Marriage Date</label>
              <input
                type="date"                // ✅ date picker input
                className="form-control"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Venue field */}
            <div className="form-group mb-3">
              <label>Venue</label>
              <input
                type="text"
                className="form-control"
                name="venue"
                value={this.state.venue}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>

        {/* ✅ Conditionally show details AFTER submission */}
        {this.state.submitted && (
          <div className="card p-4 mt-4"> {/* ✅ Another Bootstrap card */}
            <h4 className="text-center">Marriage Details</h4>
            {/* Display submitted form values */}
            <p><strong>Bride Name:</strong> {this.state.brideName}</p>
            <p><strong>Groom Name:</strong> {this.state.groomName}</p>
            <p><strong>Date:</strong> {this.state.date}</p>
            <p><strong>Venue:</strong> {this.state.venue}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MarriageForm;
