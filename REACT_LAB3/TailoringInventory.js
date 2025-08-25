// TailoringInventory.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const TailoringInventory = () => {
  const [items, setItems] = useState([]);

  // Fetch items from JSON Server
  useEffect(() => {
    axios.get("http://localhost:5000/tailoringItems")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Tailoring Inventory</h2>
      <table className="table table-bordered table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Size</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.size}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TailoringInventory;
