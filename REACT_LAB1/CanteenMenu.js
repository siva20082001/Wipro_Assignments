// CanteenMenu.js
import React from "react";
import CanteenItem from "./CanteenItem"; // Importing the CanteenItem component

// CanteenMenu component represents the entire menu of the canteen.
const CanteenMenu = () => {
  return (
    <div>
      {/* Basic Canteen Information */}
      <h2>Canteen Name: Campus Food Court</h2>
      <p><b>Location:</b> Block A, Ground Floor</p>
      <p><b>Open Hours:</b> 8:00 AM - 8:00 PM</p>

      {/* Menu Section */}
      <h3>Canteen Menu:</h3>
      <ul>
        {/* Each food item is represented using the CanteenItem component */}
        <CanteenItem name="Idli" price={30} category="Breakfast" available={true} />
        <CanteenItem name="Dosa" price={50} category="Breakfast" available={true} />
        <CanteenItem name="Vada" price={20} category="Snack" available={false} />
        <CanteenItem name="Poori" price={40} category="Breakfast" available={true} />
        <CanteenItem name="Meals" price={120} category="Lunch" available={true} />
      </ul>
    </div>
  );
};

export default CanteenMenu;
