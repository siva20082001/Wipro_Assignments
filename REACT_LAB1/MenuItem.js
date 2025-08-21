import React, { Component } from "react";

// ✅ Child class component
class MenuItem extends Component {
  render() {
    // ✅ Destructure props passed from parent
    const { name, price, category, available } = this.props;

    return (
      // ✅ Display item with all details
      <li>
        {name} - ₹{price} ({category}),{" "}
        {available ? "Available" : "Not Available"}
      </li>
    );
  }
}

export default MenuItem;
