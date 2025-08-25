// PowerCutContext.js
// ------------------------------------------------------
// This file is used to create and manage the Context API for our Power Cut Announcement system.
// Context is like a "global store" where we can keep data and share it with all components
// without needing to pass props manually at each level.

import React, { createContext, useState } from "react"; 
// ✅ 'import React' is required to use React features.
// ✅ 'createContext' → used to create a Context object.
// ✅ 'useState' → React hook to create state (a variable that can change over time).

// ✅ Step 1: Create a new context object using createContext()
// This object will help us share announcements and functions across components.
export const PowerCutContext = createContext();

// ✅ Step 2: Create a Provider component
// A Provider is like a wrapper around components that gives them access to data in the context.
export function PowerCutProvider({ children }) {
  // ✅ Step 3: Create state variable to hold announcements.
  // announcements → array of all announcement objects.
  // setAnnouncements → function to update announcements.
  const [announcements, setAnnouncements] = useState([]);

  // ✅ Step 4: Function to add new announcement
  const addAnnouncement = (street, message) => {
    // Create a new announcement object with all details
    const newAnnouncement = {
      id: Date.now(),               // unique ID (using current timestamp in milliseconds)
      street: street,               // street name entered by user
      message: message,             // announcement text entered by user
      time: new Date().toLocaleString(), // current date & time in readable format
    };

    // Add new announcement at the beginning of array
    // [...announcements] → spread operator to copy old announcements
    // [newAnnouncement, ...announcements] → put new one first
    setAnnouncements([newAnnouncement, ...announcements]);
  };

  // ✅ Step 5: Return the Provider component
  // We pass announcements + addAnnouncement function as "value".
  // Any child inside this Provider can access these values.
  return (
    <PowerCutContext.Provider value={{ announcements, addAnnouncement }}>
      {children} {/* Render whatever components are wrapped inside this provider */}
    </PowerCutContext.Provider>
  );
}
