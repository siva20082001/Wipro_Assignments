import React, { Component } from "react";

// ✅ Functional Component (Child)
// Requirement: A functional component (FruitList) should display the fruits list.
// It receives `fruits` from parent as props and maps them into <li> elements.
function FruitList(props) {
  return (
    <div>
      <h3>FruitList</h3>
      <ul>
        {/* Loop through fruits array passed from parent via props */}
        {props.fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // display each fruit in a <li>
        ))}
      </ul>
    </div>
  );
}

// ✅ Class Component (Parent)
// Requirement: A class component (Fruits) manages fruits in state + provides input & button to add new fruits.
class Fruits extends Component {
  constructor(props) {
    super(props);

    // ✅ State maintains:
    // 1. fruits → array of fruits
    // 2. newFruit → temporary input value for new fruit
    this.state = {
      fruits: ["Apple", "Banana", "Orange"], // initial fruits
      newFruit: "", // input value
    };
  }

  // ✅ Updates `newFruit` whenever user types in input box
  handleChange = (event) => {
    this.setState({ newFruit: event.target.value });
  };

  // ✅ Adds new fruit to fruits array
  // Requirement: Use spread operator (...) to update state
  handleAdd = () => {
    if (this.state.newFruit.trim() !== "") {
      this.setState((prevState) => ({
        fruits: [...prevState.fruits, prevState.newFruit], // spread old fruits + add new one
        newFruit: "", // reset input box
      }));
    }
  };

  render() {
    return (
      <div style={{ margin: "20px", fontFamily: "Arial" }}>
        <h2>Fruits</h2>

        {/* ✅ Input field to type new fruit */}
        <input
          type="text"
          value={this.state.newFruit}
          onChange={this.handleChange} // updates newFruit in state
          placeholder="Enter fruit name"
        />

        {/* ✅ Button to add fruit into list */}
        <button onClick={this.handleAdd}>Add</button>

        {/* ✅ Pass fruits state as props to child component (FruitList) */}
        <FruitList fruits={this.state.fruits} />
      </div>
    );
  }
}

export default Fruits;
