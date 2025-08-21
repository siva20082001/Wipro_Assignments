import React, { Component } from "react";
import MenuItem from "./MenuItem"; // ✅ Import child component

// ✅ Parent class component
class Restaurant extends Component {
  render() {
    return (
      <div>
        {/* ✅ Restaurant details */}
        <h2>Restaurant Name: Spice Hub</h2>
        <p><b>Location:</b> Block B, First Floor</p>
        <p><b>Open Hours:</b> 10:00 AM - 10:00 PM</p>

        {/* ✅ Restaurant Menu */}
        <h3>Restaurant Menu:</h3>
        <ul>
          {/* ✅ Multiple MenuItem (child components) injected */}
          <MenuItem
            name="Paneer Butter Masala"
            price={150}
            category="Main Course"
            available={true}
          />
          <MenuItem
            name="Chicken Biryani"
            price={200}
            category="Main Course"
            available={true}
          />
          <MenuItem
            name="Masala Dosa"
            price={80}
            category="Breakfast"
            available={true}
          />
          <MenuItem
            name="Gulab Jamun"
            price={40}
            category="Dessert"
            available={false}
          />
          <MenuItem
            name="Veg Thali"
            price={120}
            category="Combo"
            available={true}
          />
        </ul>
      </div>
    );
  }
}

export default Restaurant;
