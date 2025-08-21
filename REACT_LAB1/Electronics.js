import React, { useState } from "react";

function Electronics() {
  // useState hooks for managing state values

  // ✅ 'name' is initialized with "Laptop" but never changes, 
  // so we only use the value (no setter function needed).
  const [name] = useState("Laptop");

  // 'brand' state with setter function for updating brand.
  const [brand, setBrand] = useState("Dell");

  // 'price' state with setter function for updating price.
  const [price, setPrice] = useState(55000);

  // Function to update the brand
  const changeBrand = () => {
    setBrand("HP");
  };

  // Function to increase the price by ₹1000
  const increasePrice = () => {
    setPrice(price + 1000);
  };

  return (
    <div>
      {/* Section Heading */}
      <h2>⚡ Electronic Item Details</h2>

      {/* Display item details */}
      <p><b>Name:</b> {name}</p>
      <p><b>Brand:</b> {brand}</p>
      <p><b>Price:</b> ₹{price}</p>

      {/* Buttons for updating state */}
      <button onClick={changeBrand}>Change Brand</button>
      <button 
        onClick={increasePrice} 
        style={{ marginLeft: "10px" }}
      >
        Increase Price
      </button>
    </div>
  );
}

export default Electronics;
