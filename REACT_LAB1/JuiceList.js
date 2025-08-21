// JuiceList.js
import React from "react";
import Juice from "./Juice"; // Import the Juice component

// JuiceList component represents the entire juice menu.
const JuiceList = () => {
  // Array of juice objects (menu items)
  const juices = [
    { id: 1, name: "Orange Juice", price: 80 },
    { id: 2, name: "Apple Juice", price: 100 },
    { id: 3, name: "Mango Juice", price: 120 },
  ];

  return (
    <div>
      {/* Title of the juice menu */}
      <h2>🥤 Juice Menu</h2>

      {/* Table for displaying juices in a structured format */}
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {/* Table headers */}
            <th>ID</th>
            <th>Juice Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through juices array and render a row using the Juice component */}
          {juices.map((juice) => (
            <Juice 
              key={juice.id} 
              id={juice.id} 
              name={juice.name} 
              price={juice.price} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JuiceList;
