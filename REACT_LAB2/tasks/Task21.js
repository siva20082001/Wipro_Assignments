// Import React and useState hook
import React, { useState } from "react";

// ------------------- Parent Component -------------------
function Task21() {
  // State to store list of fruits
  const [fruits, setFruits] = useState(["Apple", "Mango"]);

  // State to store the currently selected fruit (for Child C)
  const [selectedFruit, setSelectedFruit] = useState("");

  // Function to add a new fruit from Child B
  const addFruit = (newFruit) => {
    setFruits([...fruits, newFruit]); // spread keeps old fruits, adds new one
  };

  return (
    <div style={{ border: "2px solid black", padding: "20px", margin: "20px" }}>
      <h2>🍎 React – Parent / Child / Sibling Communication</h2>

      {/* Child A → show fruit list and allow selecting a fruit */}
      <ChildA fruits={fruits} onSelectFruit={setSelectedFruit} />

      {/* Child B → send a new fruit to Parent */}
      <ChildB onSendFruit={addFruit} />

      {/* Child C → display selected fruit */}
      <ChildC selectedFruit={selectedFruit} />
    </div>
  );
}

// ------------------- Child A -------------------
// Props: receives fruits (array) and onSelectFruit (callback function)
function ChildA({ fruits, onSelectFruit }) {
  return (
    <div style={{ margin: "15px", padding: "10px", border: "1px solid gray" }}>
      <h3>Fruit List</h3>
      <ul>
        {fruits.map((fruit, index) => (
          // onClick → when user clicks fruit, tell Parent which fruit was selected
          <li key={index} onClick={() => onSelectFruit(fruit)} style={{ cursor: "pointer" }}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ------------------- Child B -------------------
// Props: receives onSendFruit (callback function to parent)
function ChildB({ onSendFruit }) {
  const handleSend = () => {
    onSendFruit("Orange"); // always sends "Orange"
  };

  return (
    <div style={{ margin: "15px", padding: "10px", border: "1px solid gray" }}>
      <h3>Sender</h3>
      <button onClick={handleSend}>Send Fruit</button>
    </div>
  );
}

// ------------------- Child C -------------------
// Props: receives selectedFruit (string from parent)
function ChildC({ selectedFruit }) {
  return (
    <div style={{ margin: "15px", padding: "10px", border: "1px solid gray" }}>
      <h3>Selected Fruit</h3>
      <p>{selectedFruit || "No fruit selected"}</p>
    </div>
  );
}

// Export Task21 so App.js can render it
export default Task21;
