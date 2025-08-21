import React from "react"; 
import ServiceCard from "./ServiceCard"; // ✅ Importing child component
import "bootstrap/dist/css/bootstrap.min.css";  // ✅ Import Bootstrap CSS once

// ✅ Parent Component → Manages services array and injects ServiceCard
const TailorShop = () => {
  // ✅ Array of JSON objects (requirement 1) → Each tailoring service
  const services = [
    {
      serviceName: "Shirt", // ✅ Nested field (serviceName)
      price: 20,             // ✅ Nested field (price)
      fabricsAvailable: ["Cotton", "Linen", "Polyester"], // ✅ Nested array
    },
    {
      serviceName: "Pants",
      price: 30,
      fabricsAvailable: ["Denim", "Wool", "Chino"],
    },
    {
      serviceName: "Lehenga",
      price: 150,
      fabricsAvailable: ["Silk", "Georgette", "Chiffon"],
    },
    {
      serviceName: "Blouse",
      price: 40,
      fabricsAvailable: ["Cotton", "Silk", "Satin"],
    },
  ];

  return (
    <div className="container mt-4"> 
      {/* ✅ Bootstrap container for layout */}
      <h2 className="text-center mb-4">👗 Tailoring Services</h2>

      <div className="row"> 
        {/* ✅ Bootstrap row for card grid */}
        
        {/* ✅ Loop through services with .map() and inject ServiceCard */}
        {services.map((service, index) => (
          // ✅ Component Injection (passing props)
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

// ✅ Export parent component
export default TailorShop;
