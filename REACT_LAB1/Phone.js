import React, { useState } from "react";

const Phone = () => {
  // ✅ useState hook to manage the phone price
  // Initial price is set to 79,999
  const [price, setPrice] = useState(79999);

  // Function to increase price by 1000 on each button click
  const increasePrice = () => {
    setPrice(price + 1000); 
  };

  return (
    <div>
      {/* Heading */}
      <h2>📱 Phone Details</h2>

      {/* Static details */}
      <p><b>Brand:</b> Apple</p>
      <p><b>Model:</b> iPhone 15</p>

      {/* Dynamic detail (price updates on state change) */}
      <p><b>Price:</b> ₹{price}</p>

      {/* Button to trigger increasePrice function */}
      <button onClick={increasePrice}>Increase Price</button>
    </div>
  );
};

export default Phone;
