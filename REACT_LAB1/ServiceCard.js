import React from "react"; // ✅ Import React for creating functional components

// ✅ Functional Component (Child) → Displays individual tailoring service
const ServiceCard = ({ service }) => {
  return (
    // ✅ Bootstrap grid system: 4 cards per row
    <div className="col-md-3 mb-3">
      {/* ✅ Bootstrap card for styling */}
      <div className="card h-100 shadow">
        <div className="card-body">
          {/* ✅ Display service name */}
          <h5 className="card-title">{service.serviceName}</h5>
          
          {/* ✅ Display price */}
          <p className="card-text">
            <strong>Price:</strong> ${service.price}
          </p>

          {/* ✅ Display fabrics header */}
          <p className="card-text"><strong>Fabrics:</strong></p>

          {/* ✅ Nested .map() to loop through fabricsAvailable */}
          <ul>
            {service.fabricsAvailable.map((fabric, index) => (
              // ✅ Each fabric shown as list item
              <li key={index}>{fabric}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ✅ Export child component so it can be injected into TailorShop
export default ServiceCard;
