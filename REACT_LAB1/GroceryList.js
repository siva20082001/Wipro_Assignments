import React from "react";

function GroceryList({ items }) {
  return (
    <div>
      {/* Section Heading */}
      <h2>Groceries List:</h2>

      {/* Render grocery items as a list */}
      <ul>
        {items.map((item, index) => (
          // ✅ Using 'index' as the key here since items are simple strings.
          // In real-world apps, a unique id is preferred instead of index.
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Button with a click event handler that shows an alert */}
      <button onClick={() => alert("Groceries Added to Cart!")}>
        Add to Cart
      </button>
    </div>
  );
}

export default GroceryList;
