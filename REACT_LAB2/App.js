// Import React
import React from "react";

// Import the task components
import Task17 from "./tasks/Task17";
import Task18 from "./tasks/Task18";
import Task19 from "./tasks/Task19";
import Task20 from "./tasks/Task20";
import Task21 from "./tasks/Task21";   // NEW → Lab Question 21

function App() {
  return (
    <div className="App">
      {/* Render Task17 */}
      <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
        <h1>Output of Task 17</h1>
        <Task17 />
      </div>

      {/* Render Task18 */}
      <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
        <h1>Output of Task 18</h1>
        <Task18 />
      </div>

      {/* Render Task19 */}
      <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
        <h1>Output of Task 19</h1>
        <Task19 />
      </div>

      {/* Render Task20 */}
      <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
        <h1>Output of Task 20</h1>
        <Task20 />
      </div>

      {/* Render Task21 */}
      <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
        <h1>Output of Task 21</h1>
        <Task21 />
      </div>
    </div>
  );
}

export default App;
