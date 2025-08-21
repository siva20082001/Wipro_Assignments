import React, { Component } from "react";

class AccessoriesForm extends Component {
  constructor(props) {
    super(props);
    // Initial state with all form input fields
    this.state = {
      name: "",          // text → Accessory Name
      description: "",   // textarea → Description
      category: "Electronics", // select → Category (default value)
      brand: "",         // radio → Brand
      inStock: false,    // checkbox → Availability
      warranty: "",      // number → Warranty (Years)
      submitted: false,  // flag to check if form is submitted
    };
  }

  // Handles input changes dynamically (for text, textarea, select, radio, checkbox, number)
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value, 
      // Special handling: checkbox stores true/false instead of string
    });
  };

  // On form submit → prevent refresh and mark form as submitted
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="card p-4">
          <h3 className="text-center">Accessories Form</h3>
          {/* Form begins */}
          <form onSubmit={this.handleSubmit}>
            {/* Text input */}
            <div className="form-group mb-3">
              <label>Accessory Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            {/* Textarea input */}
            <div className="form-group mb-3">
              <label>Description</label>
              <textarea
                className="form-control"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            {/* Dropdown (select) */}
            <div className="form-group mb-3">
              <label>Category</label>
              <select
                className="form-control"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              >
                <option>Electronics</option>
                <option>Furniture</option>
                <option>Clothing</option>
              </select>
            </div>

            {/* Radio buttons for Brand */}
            <div className="form-group mb-3">
              <label>Brand</label><br />
              <input
                type="radio"
                name="brand"
                value="Sony"
                onChange={this.handleChange}
              /> Sony{" "}
              <input
                type="radio"
                name="brand"
                value="Samsung"
                onChange={this.handleChange}
              /> Samsung{" "}
              <input
                type="radio"
                name="brand"
                value="LG"
                onChange={this.handleChange}
              /> LG
            </div>

            {/* Checkbox input */}
            <div className="form-group mb-3">
              <input
                type="checkbox"
                name="inStock"
                checked={this.state.inStock}
                onChange={this.handleChange}
              />{" "}
              Available in Stock
            </div>

            {/* Number input */}
            <div className="form-group mb-3">
              <label>Warranty (Years)</label>
              <input
                type="number"
                className="form-control"
                name="warranty"
                value={this.state.warranty}
                onChange={this.handleChange}
              />
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </form>
        </div>

        {/* Conditionally render submitted data in Bootstrap table */}
        {this.state.submitted && (
          <div className="card mt-4 p-3">
            <h4>Submitted Accessory Details</h4>
            <table className="table table-bordered">
              <tbody>
                <tr><th>Name</th><td>{this.state.name}</td></tr>
                <tr><th>Description</th><td>{this.state.description}</td></tr>
                <tr><th>Category</th><td>{this.state.category}</td></tr>
                <tr><th>Brand</th><td>{this.state.brand}</td></tr>
                <tr><th>In Stock</th><td>{this.state.inStock ? "Yes" : "No"}</td></tr>
                <tr><th>Warranty</th><td>{this.state.warranty} Years</td></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default AccessoriesForm;
