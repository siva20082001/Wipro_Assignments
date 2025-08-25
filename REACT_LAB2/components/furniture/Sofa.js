// Import React
import React from "react";

// Define Sofa component
const Sofa = () => {
  // Furniture details
  const details = {
    name: "Luxury Sofa",
    price: 30000,
    material: "Leather",
    size: "3 Seater",
    brand: "Godrej Interio",
  };

  // Return JSX
  return (
    <div>
      <h3>🛋️ Sofa</h3>
      <p><strong>Name:</strong> {details.name}</p>
      <p><strong>Price:</strong> ₹{details.price}</p>
      <p><strong>Material:</strong> {details.material}</p>
      <p><strong>Size:</strong> {details.size}</p>
      <p><strong>Brand:</strong> {details.brand}</p>
    </div>
  );
};

// Export Sofa
export default Sofa;
