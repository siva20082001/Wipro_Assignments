// Import React and useState hook from 'react'
import React, { useState } from "react";

// Import separate furniture components
import Chair from "../components/furniture/Chair";
import Table from "../components/furniture/Table";
import Sofa from "../components/furniture/Sofa";
import Bed from "../components/furniture/Bed";

// Define Task18 component
const Task18 = () => {
  // State variable → stores the currently selected furniture type
  // Default value is "Chair"
  const [selectedFurniture, setSelectedFurniture] = useState("Chair");

  // Function to handle dropdown change
  const handleChange = (event) => {
    // Update state with selected value from dropdown
    setSelectedFurniture(event.target.value);
  };

  // Function to render furniture component dynamically using switch-case
  const renderFurniture = () => {
    switch (selectedFurniture) {
      case "Chair":
        // If user selects Chair → render Chair component
        return <Chair />;
      case "Table":
        // If user selects Table → render Table component
        return <Table />;
      case "Sofa":
        // If user selects Sofa → render Sofa component
        return <Sofa />;
      case "Bed":
        // If user selects Bed → render Bed component
        return <Bed />;
      default:
        // If no match → show a fallback message
        return <p>Please select a furniture item.</p>;
    }
  };

  // Return JSX
  return (
    <div>
      {/* Heading */}
      <h2>Furniture Store</h2>

      {/* Dropdown menu to select furniture type */}
      <select value={selectedFurniture} onChange={handleChange}>
        {/* Dropdown option for Chair */}
        <option value="Chair">Chair</option>
        {/* Dropdown option for Table */}
        <option value="Table">Table</option>
        {/* Dropdown option for Sofa */}
        <option value="Sofa">Sofa</option>
        {/* Dropdown option for Bed */}
        <option value="Bed">Bed</option>
      </select>

      {/* Render furniture details dynamically */}
      {renderFurniture()}
    </div>
  );
};

// Export Task18
export default Task18;
