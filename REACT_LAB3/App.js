// App.js
// ------------------------------------------------------
// This is the ROOT component of our React application.
// It combines ALL LABS into one single project.
// Currently, it displays SEVEN SECTIONS:
//
//   1. Chess Tournament Registration
//   2. Hockey Tournament Registration
//   3. Tailoring Inventory (CRUD from JSON Server)
//   4. Football Player Management (CRUD from JSON Server)
//   5. Electricity Power Cut Announcement System (using Context API)
//   6. Income Tax Department Portal (with React Router + Bootstrap Navbar)
//   7. Future labs can also be added easily below
// ------------------------------------------------------

// ✅ Import React library so we can use JSX (HTML-like syntax in JS)
import React from "react";

// ✅ Import components from older labs
import ChessTournamentForm from "./ChessTournamentForm";   // Lab 1: Chess Registration Form
import HockeyTournamentForm from "./HockeyTournamentForm"; // Lab 2: Hockey Registration Form
import TailoringInventory from "./TailoringInventory";     // Lab 3: Tailoring Inventory Table
import PlayerManagement from "./PlayerManagement";         // Lab 4: Football Player CRUD

// ✅ Import components for Power Cut Announcement system (Lab 5)
// Context API is used here → to share data between SendAnnouncement and AnnouncementList
import { PowerCutProvider } from "./PowerCutContext"; // "Provider" gives shared state to children
import SendAnnouncement from "./SendAnnouncement";    // Component to send (add) announcements
import AnnouncementList from "./AnnouncementList";    // Component to display announcements

// ✅ Import React Router features (needed for Lab 27: Income Tax Dept Portal)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Import Navbar for Lab 27 (Bootstrap Navigation Bar)
import Navbar from "./Navbar";

// ✅ Import pages for Lab 27
// These are simple static components that display headings only
import Home from "./pages/Home";
import AddTaxpayer from "./pages/AddTaxpayer";
import TaxpayerList from "./pages/TaxpayerList";
import CalculateTax from "./pages/CalculateTax";
import TaxRates from "./pages/TaxRates";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

// ✅ Main function component (root of our React app)
function App() {
  return (
    // ✅ Main Bootstrap container for proper spacing
    // "mt-4" → margin-top spacing class from Bootstrap
    <div className="container mt-4">

      {/* ---------------- Section 1: Chess ---------------- */}
      {/* Title for Chess Section */}
      <h1 className="text-center mb-4">♟ Chess Tournament Registration</h1>
      {/* Component that shows Chess Tournament Registration Form */}
      <ChessTournamentForm />
      {/* Horizontal line for separation between sections */}
      <hr />

      {/* ---------------- Section 2: Hockey ---------------- */}
      {/* Title for Hockey Section */}
      <h1 className="text-center mb-4">🏒 Hockey Tournament Registration</h1>
      {/* Component that shows Hockey Registration Form */}
      <HockeyTournamentForm />
      <hr />

      {/* ---------------- Section 3: Tailoring ---------------- */}
      {/* Title for Tailoring Section */}
      <h1 className="text-center mb-4">🧵 Tailoring Inventory (from JSON Server)</h1>
      {/* Component that shows Tailoring Inventory Table */}
      <TailoringInventory />
      <hr />

      {/* ---------------- Section 4: Football ---------------- */}
      {/* Title for Football Section */}
      <h1 className="text-center mb-4">⚽ Football Player Management System</h1>
      {/* Component that shows Player CRUD (Create/Read/Update/Delete) */}
      <PlayerManagement />
      <hr />

      {/* ---------------- Section 5: Power Cut ---------------- */}
      {/* Title for Power Cut Section */}
      <h1 className="text-center mb-4">💡 Electricity Power Cut Announcements</h1>
      {/* Wrap inside PowerCutProvider so children share same context (shared state) */}
      <PowerCutProvider>
        {/* Form for sending announcements */}
        <SendAnnouncement />
        {/* List for displaying announcements */}
        <AnnouncementList />
      </PowerCutProvider>
      <hr />

      {/* ---------------- Section 6: Income Tax Dept ---------------- */}
      {/* Title for Income Tax Department Section */}
      <h1 className="text-center mb-4">🏛 Income Tax Department Portal</h1>
      
      {/* Router starts here (only affects Lab 27 part, not above labs) */}
      <Router>
        {/* Navbar is placed inside Router so that links work */}
        <Navbar />

        {/* mt-4 → margin-top spacing for better layout */}
        <div className="mt-4">
          {/* Routes = collection of Route definitions */}
          <Routes>
            {/* Each Route → path + element (component to display) */}
            <Route path="/" element={<Home />} />                   {/* Home Page */}
            <Route path="/add-taxpayer" element={<AddTaxpayer />} /> {/* Add Taxpayer Page */}
            <Route path="/taxpayer-list" element={<TaxpayerList />} /> {/* Taxpayer List Page */}
            <Route path="/calculate-tax" element={<CalculateTax />} /> {/* Calculate Tax Page */}
            <Route path="/tax-rates" element={<TaxRates />} />       {/* Tax Rates Info Page */}
            <Route path="/contact" element={<Contact />} />          {/* Contact Page */}
            <Route path="/about" element={<About />} />              {/* About Page */}
            <Route path="/faq" element={<FAQ />} />                  {/* FAQ Page */}
            <Route path="*" element={<NotFound />} />                {/* Fallback: 404 Page */}
          </Routes>
        </div>
      </Router>

      {/* ✅ Extra empty space at bottom so content doesn't stick to screen edge */}
      <div style={{ marginBottom: "80px" }}></div>
    </div>
  );
}

// ✅ Export App so index.js can import and render it into DOM
export default App;
