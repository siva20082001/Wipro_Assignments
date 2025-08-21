import React from "react"; // ✅ Import React for functional component

// ✅ Functional Component → Displays a list of famous temples in India
const TempleList = () => {
  // ✅ Array of JSON objects (requirement 1) → Each temple has id, name, location, and deities
  const temples = [
    {
      id: 1,
      name: "Meenakshi Amman Temple",
      location: "Madurai, Tamil Nadu",
      deities: ["Meenakshi", "Sundareswarar"], // ✅ Nested array (requirement 2)
    },
    {
      id: 2,
      name: "Sri Venkateswara Temple",
      location: "Tirupati, Andhra Pradesh",
      deities: ["Venkateswara", "Lakshmi"],
    },
    {
      id: 3,
      name: "Jagannath Temple",
      location: "Puri, Odisha",
      deities: ["Jagannath", "Balabhadra", "Subhadra"],
    },
  ];

  return (
    <div>
      {/* ✅ Heading */}
      <h3>📍 Famous Temples in India</h3>

      {/* ✅ HTML Table to display temple details */}
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Temple Name</th>
            <th>Location</th>
            <th>Deities</th>
          </tr>
        </thead>
        <tbody>
          {/* ✅ Outer .map() to loop through temples */}
          {temples.map((temple) => (
            <tr key={temple.id}>
              {/* ✅ Display temple ID */}
              <td>{temple.id}</td>

              {/* ✅ Display temple name */}
              <td>{temple.name}</td>

              {/* ✅ Display temple location */}
              <td>{temple.location}</td>

              {/* ✅ Nested .map() (requirement 3) → Loop through deities */}
              <td>
                <ul>
                  {temple.deities.map((deity, index) => (
                    // ✅ Each deity inside list item
                    <li key={index}>{deity}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ✅ Export component
export default TempleList;
