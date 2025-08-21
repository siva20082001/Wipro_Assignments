import React from "react";

function SweetsList() {
  // Array of sweet objects with id, name, and price
  const sweets = [
    { id: 1, name: "Laddu", price: 50 },
    { id: 2, name: "Jalebi", price: 40 },
    { id: 3, name: "Rasgulla", price: 60 },
    { id: 4, name: "Gulab Jamun", price: 70 },
  ];

  return (
    <div>
      {/* Section heading */}
      <h2>Sweets List:</h2>

      {/* Unordered list to display sweets */}
      <ul>
        {/* Loop through sweets array and render each item */}
        {sweets.map((sweet) => (
          <li key={sweet.id}>
            {/* Show sweet name and price */}
            {sweet.name} - Price: ₹{sweet.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SweetsList;
