// Juice.js
import React from "react";

// Juice component represents a single juice item row in the table.
// It receives props: id, name, and price.
const Juice = ({ id, name, price }) => {
  return (
    <tr>
      {/* Display juice ID */}
      <td>{id}</td>
      {/* Display juice name */}
      <td>{name}</td>
      {/* Display juice price with ₹ symbol */}
      <td>₹{price}</td>
    </tr>
  );
};

export default Juice;
