// CanteenItem.js
import React from "react";

// CanteenItem component represents a single food item in the canteen menu.
// It takes props: name, price, category, and availability status.
const CanteenItem = ({ name, price, category, available }) => {
  return (
    <li>
      {/* Display item details in a single line */}
      {name} - Price: ₹{price} - Category: {category} -{" "}
      {/* Conditional rendering based on availability */}
      {available ? "Available" : "Not Available"}
    </li>
  );
};

export default CanteenItem;
