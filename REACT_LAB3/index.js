// index.js
// ----------------------------
// Entry point of Create React App
// It renders <App /> into the root div in public/index.html
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react"; // import React
import ReactDOM from "react-dom/client"; // import ReactDOM for rendering
import "./index.css"; // default CRA styles (optional)
import App from "./App"; // import App component

// Create root object linked to the <div id="root"> in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render App inside React.StrictMode (extra checks in dev mode)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
