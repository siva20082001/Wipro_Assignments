// Import React
import React from "react";

// Define Chair component
const Chair = () => {
  // Furniture details (hardcoded for now)
  const details = {
    name: "Office Chair",    // Name of chair
    price: 2500,             // Price of chair
    material: "Plastic",     // Material used
    size: "Medium",          // Size description
    brand: "Nilkamal",       // Brand name
  };

  // Return JSX with details
  return (
    <div>
      {/* Title */}
      <h3>🪑 Chair</h3>
      <p><strong>Name:</strong> {details.name}</p>
      <p><strong>Price:</strong> ₹{details.price}</p>
      <p><strong>Material:</strong> {details.material}</p>
      <p><strong>Size:</strong> {details.size}</p>
      <p><strong>Brand:</strong> {details.brand}</p>
    </div>
  );
};

// Export Chair
export default Chair;
