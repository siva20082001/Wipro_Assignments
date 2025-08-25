// Import React
import React from "react";

// Define Table component
const Table = () => {
  // Furniture details
  const details = {
    name: "Dining Table",
    price: 12000,
    material: "Wood",
    size: "6 Seater",
    brand: "Ikea",
  };

  // Return JSX
  return (
    <div>
      <h3>🪑 Table</h3>
      <p><strong>Name:</strong> {details.name}</p>
      <p><strong>Price:</strong> ₹{details.price}</p>
      <p><strong>Material:</strong> {details.material}</p>
      <p><strong>Size:</strong> {details.size}</p>
      <p><strong>Brand:</strong> {details.brand}</p>
    </div>
  );
};

// Export Table
export default Table;
