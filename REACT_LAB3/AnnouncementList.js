// AnnouncementList.js
// ------------------------------------------------------
// This component displays all announcements stored in PowerCutContext.
// The announcements are shown inside a scrollable container with Bootstrap styling.

import React, { useContext } from "react";
// ✅ useContext is used to get announcements array from context.

import { PowerCutContext } from "./PowerCutContext";
// ✅ Import context so we can read announcements.

function AnnouncementList() {
  // ✅ Get announcements from context
  const { announcements } = useContext(PowerCutContext);

  return (
    <div
      className="border rounded p-3"             // Bootstrap border + rounded corners + padding
      style={{ maxHeight: "300px", overflowY: "auto" }} // Scrollable box
    >
      <h4 className="mb-3">📢 Power Cut Announcements</h4>

      {/* If no announcements exist, show message */}
      {announcements.length === 0 ? (
        <p className="text-muted">No announcements yet...</p>
      ) : (
        // ✅ Map through announcements array and display each one
        announcements.map((a) => (
          <div
            key={a.id}                          // unique key required by React
            className="alert alert-warning mb-2"// Bootstrap alert (yellow)
            role="alert"                        // accessibility role
          >
            <strong>Street:</strong> {a.street} <br />
            <strong>Message:</strong> {a.message} <br />
            <small className="text-muted">⏰ {a.time}</small>
          </div>
        ))
      )}
    </div>
  );
}

// ✅ Export so it can be used in App.js
export default AnnouncementList;
