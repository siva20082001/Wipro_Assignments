// Import React
import React from "react";

// Define a functional component that accepts 'product' as a prop
const ProductComponent = ({ product }) => {
  // Return JSX displaying product details
  return (
    <div>
      {/* Section title */}
      <h3>Electronic Product Details</h3>

      {/* Show name */}
      <p><strong>Name:</strong> {product.name}</p>

      {/* Show brand */}
      <p><strong>Brand:</strong> {product.brand}</p>

      {/* Show price */}
      <p><strong>Price:</strong> ₹{product.price}</p>

      {/* Show category */}
      <p><strong>Category:</strong> {product.category}</p>

      {/* If price > 50000 → Premium Product, else Budget Product */}
      <p><strong>Type:</strong> {product.price > 50000 ? "Premium Product" : "Budget Product"}</p>

      {/* Warranty: if warranty > 0 show years, else "No Warranty" */}
      <p><strong>Warranty:</strong> {product.warranty > 0 ? `${product.warranty} years` : "No Warranty"}</p>

      {/* Availability: if true show In Stock with check emoji, else Out of Stock with cross emoji */}
      <p>
        <strong>Availability:</strong>{" "}
        {product.availability ? "✅ In Stock" : "❌ Out of Stock"}
      </p>

      {/* Special offer: if category is Laptop → show free bag offer */}
      {product.category === "Laptop" && (
        <p>🎒 Free Laptop Bag Offer</p>
      )}
    </div>
  );
};

// Export the component
export default ProductComponent;
