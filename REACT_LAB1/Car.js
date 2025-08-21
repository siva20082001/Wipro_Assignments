import React, { Component } from "react";

class Car extends Component {
  render() {
    // ✅ Destructuring props for cleaner access
    const { brand, model, color, year } = this.props;

    return (
      <div>
        {/* Section heading */}
        <h2>Car Details:</h2>

        {/* Displaying car details using props */}
        <p><b>Brand:</b> {brand}</p>
        <p><b>Model:</b> {model}</p>
        <p><b>Color:</b> {color}</p>
        <p><b>Year:</b> {year}</p>
      </div>
    );
  }
}

export default Car;
