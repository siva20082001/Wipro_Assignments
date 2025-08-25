// Import React
import React from "react";

// Define Bed component
const Bed = () => {
  // Furniture details
  const details = {
    name: "King Size Bed",
    price: 45000,
    material: "Teak Wood",
    size: "King",
    brand: "Durfi",
  };

  // Return JSX
  return (
    <div>
      <h3>🛏️ Bed</h3>
      <p><strong>Name:</strong> {details.name}</p>
      <p><strong>Price:</strong> ₹{details.price}</p>
      <p><strong>Material:</strong> {details.material}</p>
      <p><strong>Size:</strong> {details.size}</p>
      <p><strong>Brand:</strong> {details.brand}</p>
    </div>
  );
};

// Export Bed
export default Bed;
