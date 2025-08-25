// Navbar.js
// ------------------------------------------------------
// This file creates the Bootstrap Navigation Bar (Navbar).
// It allows the user to click and go to different pages
// of the Income Tax Department Portal (Lab 27).
// ------------------------------------------------------

import React from "react"; 
// ✅ We must import React, otherwise JSX (HTML-like syntax in JS) won’t work.

import { NavLink } from "react-router-dom"; 
// ✅ NavLink is like <a> tag, but it works with React Router without page refresh.
// ✅ Also, NavLink can highlight the active page automatically.

import "bootstrap/dist/css/bootstrap.min.css"; 
// ✅ Import Bootstrap CSS styles → required for dark navbar, margins, etc.

function Navbar() {
  // ✅ Function component (returns JSX to show on screen)
  return (
    // ✅ <nav> = semantic HTML tag for navigation bars
    // ✅ Bootstrap classes:
    //     - navbar: makes it a navbar
    //     - navbar-expand-lg: expands on large screens
    //     - navbar-dark: dark colored text/icons
    //     - bg-dark: background color dark
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      {/* container-fluid = full-width container (Bootstrap class) */}
      <div className="container-fluid">

        {/* ✅ Brand name → Clicking goes to Home ("/") */}
        <NavLink className="navbar-brand" to="/">
          Income Tax Department
        </NavLink>

        {/* ✅ Button for mobile screens → collapses/expands menu */}
        <button
          className="navbar-toggler"     // Bootstrap class for hamburger button
          type="button"                  // HTML button
          data-bs-toggle="collapse"      // Tells Bootstrap → toggle collapse
          data-bs-target="#navbarNav"    // Which div to collapse/expand
        >
          {/* Inside button → Bootstrap will show hamburger icon */}
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ This is the collapsible area (menu links) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* ul = unordered list (menu items) */}
          {/* ms-auto = margin-start auto → pushes menu items to the right */}
          <ul className="navbar-nav ms-auto">

            {/* ✅ Each li = one menu link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/add-taxpayer">Add Taxpayer</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/taxpayer-list">Taxpayer List</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/calculate-tax">Calculate Tax</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/tax-rates">Tax Rates</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/faq">FAQ</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// ✅ Export Navbar so App.js can use it
export default Navbar;
