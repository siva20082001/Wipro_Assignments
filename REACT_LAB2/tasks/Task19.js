// Import React, useState, useEffect
import React, { useState, useEffect } from "react";

function Task19() {
  // State for festival name
  const [festival, setFestival] = useState("Diwali");

  // State for countdown timer (start with 10 seconds)
  const [countdown, setCountdown] = useState(10);

  // ---------------- Q1: Festival Greeting (Every Render) ----------------
  useEffect(() => {
    console.log("Festival App Rendered");
  }); 
  // ❌ no dependency array → runs EVERY render

  // ---------------- Q2: Welcome Message (Run Once) ----------------
  useEffect(() => {
    alert("Welcome to Diwali Festival App");
  }, []); 
  // [] empty array → runs ONLY once when component mounts

  // ---------------- Q3: Festival Change Tracker (Dependency Example) ----------------
  useEffect(() => {
    console.log(`Festival changed to ${festival}`);
  }, [festival]); 
  // Runs only when "festival" state changes

  // ---------------- Q4: Countdown Timer (Cleanup Example) ----------------
  useEffect(() => {
    // Start interval → decrease countdown every second
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Cleanup function → stops timer when component unmounts
    return () => clearInterval(timer);
  }, []); 
  // [] → only starts once when mounted

  // ---------------- Q5: Multiple Dependencies ----------------
  useEffect(() => {
    console.log(`Festival: ${festival}, Countdown: ${countdown}`);
  }, [festival, countdown]); 
  // Runs whenever festival OR countdown changes

  // ---------------- UI ----------------
  return (
    <div style={{ border: "2px solid #333", padding: "20px", margin: "20px" }}>
      <h2>🎉 Festival React App</h2>
      <p><strong>Festival:</strong> {festival}</p>
      <p><strong>Countdown:</strong> {countdown} seconds</p>

      {/* Buttons to change festival */}
      <button onClick={() => setFestival("Holi")}>Change to Holi</button>
      <button onClick={() => setFestival("Pongal")}>Change to Pongal</button>
    </div>
  );
}

export default Task19;
