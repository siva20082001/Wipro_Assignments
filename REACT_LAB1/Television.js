import React, { Component } from "react"; 
// ✅ Import React & Component (needed for creating class components)


// ✅ Functional Component (TelevisionList)
// Requirement: A Functional Component receives props (`tvModels`) and displays them in a list.
function TelevisionList({ tvModels }) {
  return (
    <div>
      <h3>Available Television Models</h3>
      <ul>
        {/* ✅ Loop through tvModels (array passed as props) and render each inside <li> */}
        {tvModels.map((model, index) => (
          <li key={index}>{model}</li> 
        ))}
      </ul>
    </div>
  );
}


// ✅ Class Component (TelevisionManager)
// Requirement: A Class Component should maintain the list of television models in state.
class TelevisionManager extends Component {
  constructor(props) {
    super(props);

    // ✅ State contains:
    // tvModels → array of television models
    // newModel → temporary input value for a new model
    this.state = {
      tvModels: ["Samsung QLED", "Sony Bravia", "LG OLED"], // initial values
      newModel: "", // input starts empty
    };
  }

  // ✅ Updates "newModel" in state whenever user types in the input field
  handleChange = (e) => {
    this.setState({ newModel: e.target.value });
  };

  // ✅ Adds a new television model to the list
  // Requirement: Use spread operator (...) to update the state array
  addModel = () => {
    if (this.state.newModel.trim() !== "") {
      this.setState({
        tvModels: [...this.state.tvModels, this.state.newModel], // spread operator adds new model
        newModel: "", // clear input after adding
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Television Manager</h2>

        {/* ✅ Input field to type new television model */}
        <input
          type="text"
          placeholder="Enter TV model"
          value={this.state.newModel} // controlled input (bound to state)
          onChange={this.handleChange} // updates state on typing
        />

        {/* ✅ Button to trigger addModel() and insert into list */}
        <button onClick={this.addModel}>Add</button>

        {/* ✅ Passes tvModels from state as props to the functional component */}
        <TelevisionList tvModels={this.state.tvModels} />
      </div>
    );
  }
}

export default TelevisionManager; 
// ✅ Export the class component so it can be rendered in App.js
