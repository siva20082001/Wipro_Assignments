// Import React and its hooks (useState, useEffect) so we can use them
import React, { useState, useEffect } from "react";

// Define our component named Task20 (functional component)
function Task20() {
  // useState → to store form data (like restaurantName, ownerName, etc.)
  // formData is the state variable (current data), setFormData is the function to update it
  const [formData, setFormData] = useState({
    restaurantName: "",  // initially empty
    ownerName: "",       // initially empty
    email: "",           // initially empty
    contact: "",         // initially empty
    address: "",         // initially empty
    cuisine: "",         // initially empty
    openingHours: "",    // initially empty
  });

  // Another state to store submitted data separately
  // submittedData = null at first → means no data is submitted yet
  const [submittedData, setSubmittedData] = useState(null);

  // ---------------- useEffect examples -------------------

  // Example 1: Runs on every render (no dependency array)
  useEffect(() => {
    console.log("Component rendered"); // Just logs message whenever component renders
  });

  // Example 2: Runs only once (when component mounts) → dependency array []
  useEffect(() => {
    console.log("Restaurant Registration Form mounted"); // This runs only when form loads first time
  }, []);

  // Example 3: Runs whenever formData changes (dependency [formData])
  useEffect(() => {
    console.log("Form data changed:", formData); // Logs whenever user types in any input
  }, [formData]);

  // Example 4: Auto-save form data every 5 seconds (interval)
  useEffect(() => {
    // Set interval → runs every 5000 ms (5 seconds)
    const interval = setInterval(() => {
      console.log("Auto-saving form data:", formData); // pretend saving to server
    }, 5000);

    // Cleanup → clears interval when component unmounts OR formData changes
    return () => clearInterval(interval);
  }, [formData]);

  // ---------------- Event Handlers -------------------

  // handleChange → called whenever user types in input fields
  const handleChange = (e) => {
    // e.target.name → field name (like "restaurantName")
    // e.target.value → typed value
    // Spread operator {...formData} → keeps old values unchanged
    // Only updates the specific input being typed
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handleSubmit → called when user clicks submit button
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    setSubmittedData(formData); // save form data into submittedData state
  };

  // ---------------- JSX UI -------------------

  return (
    // Outer div with styling (max width, margin auto centers it, border for box, padding, rounded corners)
    <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "2px solid #ccc", borderRadius: "10px" }}>
      
      {/* Heading of form */}
      <h2>🍴 Restaurant Registration Form</h2>
      {/* Small welcome message */}
      <p>Welcome to Restaurant Registration 🏛</p>

      {/* Form starts here */}
      <form onSubmit={handleSubmit}>
        {/* Each input field is linked to formData using value + onChange */}
        <input 
          type="text" 
          name="restaurantName" 
          placeholder="Restaurant Name" 
          value={formData.restaurantName} 
          onChange={handleChange} 
          required 
        />
        <br /><br />

        <input 
          type="text" 
          name="ownerName" 
          placeholder="Owner Name" 
          value={formData.ownerName} 
          onChange={handleChange} 
          required 
        />
        <br /><br />

        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <br /><br />

        <input 
          type="text" 
          name="contact" 
          placeholder="Contact Number" 
          value={formData.contact} 
          onChange={handleChange} 
          required 
        />
        <br /><br />

        <input 
          type="text" 
          name="address" 
          placeholder="Address" 
          value={formData.address} 
          onChange={handleChange} 
          required 
        />
        <br /><br />

        <input 
          type="text" 
          name="cuisine" 
          placeholder="Cuisine Type" 
          value={formData.cuisine} 
          onChange={handleChange} 
          required 
        />
        <br /><br />

        <input 
          type="text" 
          name="openingHours" 
          placeholder="Opening Hours" 
          value={formData.openingHours} 
          onChange={handleChange} 
          required 
        />
        <br /><br />

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>

      {/* If submittedData is not null, then show JSON output */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>📑 Submitted Data (JSON)</h3>
          {/* JSON.stringify → convert JS object into readable JSON string */}
          {/* null, 2 → makes it pretty (indented with 2 spaces) */}
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

// Export component so App.js can use it
export default Task20;
