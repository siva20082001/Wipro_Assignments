// Home.js
// ------------------------------------------------------
// This is the home page of the Income Tax Department Portal.
// When user clicks "Home" in navbar, this page is shown.
// ------------------------------------------------------

import React from "react"; // ✅ Required to use JSX

function Home() {
  return (
    <div className="text-center mt-5">
      {/* ✅ h2 heading with welcome message */}
      <h2>Welcome to the Income Tax Department Portal</h2>
    </div>
  );
}

// ✅ Export so App.js can use it inside <Route>
export default Home;
