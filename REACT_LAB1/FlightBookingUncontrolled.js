import React, { Component, createRef } from "react";

class FlightBookingUncontrolled extends Component {
  constructor(props) {
    super(props);
    // ✅ Uncontrolled Component: Using Refs instead of state (Requirement 2)
    this.flightNumberRef = createRef();   // Flight Number (text)
    this.sourceRef = createRef();         // Source (text)
    this.destinationRef = createRef();    // Destination (text)
    this.dateRef = createRef();           // Travel Date (date)
    this.termsRef = createRef();          // Terms Accepted (checkbox)

    this.state = { submitted: false, data: {} }; // Store submitted data
  }

  // ✅ Handle form submission (get values via refs)
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true,
      data: {
        flightNumber: this.flightNumberRef.current.value,
        source: this.sourceRef.current.value,
        destination: this.destinationRef.current.value,
        date: this.dateRef.current.value,
        terms: this.termsRef.current.checked
      }
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Uncontrolled Flight Booking Form</h3>

        {/* ✅ Uncontrolled form - inputs managed with refs */}
        <form onSubmit={this.handleSubmit}>
          {/* Flight Number */}
          <div className="mb-3">
            <label className="form-label">Flight Number</label>
            <input type="text" className="form-control" ref={this.flightNumberRef} required />
          </div>

          {/* Source */}
          <div className="mb-3">
            <label className="form-label">Source</label>
            <input type="text" className="form-control" ref={this.sourceRef} required />
          </div>

          {/* Destination */}
          <div className="mb-3">
            <label className="form-label">Destination</label>
            <input type="text" className="form-control" ref={this.destinationRef} required />
          </div>

          {/* Travel Date */}
          <div className="mb-3">
            <label className="form-label">Travel Date</label>
            <input type="date" className="form-control" ref={this.dateRef} required />
          </div>

          {/* Terms Accepted */}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" ref={this.termsRef} />
            <label className="form-check-label">Terms Accepted</label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success">Submit</button>
        </form>

        {/* ✅ Display submitted data in a Bootstrap Card (Requirement 2) */}
        {this.state.submitted && (
          <div className="card mt-3 p-3">
            <h5>Flight Details</h5>
            <p><b>Flight Number:</b> {this.state.data.flightNumber}</p>
            <p><b>Source:</b> {this.state.data.source}</p>
            <p><b>Destination:</b> {this.state.data.destination}</p>
            <p><b>Date:</b> {this.state.data.date}</p>
            <p><b>Terms Accepted:</b> {this.state.data.terms ? "Yes" : "No"}</p>
          </div>
        )}
      </div>
    );
  }
}

export default FlightBookingUncontrolled;
