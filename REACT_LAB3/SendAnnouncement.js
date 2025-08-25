// SendAnnouncement.js
// ------------------------------------------------------
// This component displays a form where the admin can enter:
//   - Street name
//   - Announcement message
// When submitted, it calls addAnnouncement() from context to add data globally.

import React, { useState, useContext } from "react";
// ✅ 'useState' → used for handling input fields (street + message).
// ✅ 'useContext' → used to access PowerCutContext data (addAnnouncement function).

import { PowerCutContext } from "./PowerCutContext";
// ✅ Import the context we created earlier so we can use addAnnouncement().

function SendAnnouncement() {
  // ✅ Access addAnnouncement function from PowerCutContext
  const { addAnnouncement } = useContext(PowerCutContext);

  // ✅ Local state for form inputs
  // street → stores current value of "street name" text box
  // message → stores current value of "announcement message" text area
  const [street, setStreet] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Handle form submission when admin clicks the "Send Announcement" button
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload (default behavior of HTML forms)

    // Check if both fields are not empty
    if (street.trim() && message.trim()) {
      addAnnouncement(street, message); // Call context function to add announcement
      setStreet("");  // clear street input after submission
      setMessage(""); // clear message input after submission
    }
  };

  return (
    // ✅ HTML form with Bootstrap styling
    <form onSubmit={handleSubmit} className="mb-3">
      {/* Street Input Field */}
      <div className="mb-2">
        <input
          type="text"                        // input type = text
          className="form-control"           // Bootstrap class for styling
          placeholder="Enter Street Name"    // placeholder text inside box
          value={street}                     // bind input to street state
          onChange={(e) => setStreet(e.target.value)} // update street when typing
        />
      </div>

      {/* Message Input Field */}
      <div className="mb-2">
        <textarea
          className="form-control"                // Bootstrap class
          placeholder="Enter Announcement Message"// placeholder text
          rows="2"                                // height of text area
          value={message}                         // bind input to message state
          onChange={(e) => setMessage(e.target.value)} // update message on typing
        ></textarea>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary">
        Send Announcement
      </button>
    </form>
  );
}

// ✅ Export component so it can be imported in App.js
export default SendAnnouncement;
