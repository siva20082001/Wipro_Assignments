// Import React and hooks from the 'react' library
import React, { useState, useEffect } from "react";

// Import three components that we will render conditionally
import LoadingComponent from "../components/LoadingComponent";
import ErrorComponent from "../components/ErrorComponent";
import ProductComponent from "../components/ProductComponent";

// Define a functional component called Task17
const Task17 = () => {
  // State variable to track if data is still loading
  const [loading, setLoading] = useState(true);
  
  // State variable to track if there was an error
  const [error, setError] = useState(false);
  
  // State variable to hold the product data (initially null)
  const [product, setProduct] = useState(null);

  // useEffect runs once after the component mounts
  useEffect(() => {
    // Simulate an API call with setTimeout (wait for 2 seconds)
    setTimeout(() => {
      // Randomly decide if the API call is successful or failed
      const success = true; // change to false to test error state

      // If API call is successful
      if (success) {
        // Set product details (dummy data)
        setProduct({
          name: "Sony Bravia TV",    // Product name
          brand: "Sony",             // Product brand
          price: 65000,              // Product price in rupees
          category: "TV",            // Category of the product
          warranty: 2,               // Warranty in years
          availability: true,        // Product is in stock
        });

        // Turn off loading because data has been fetched
        setLoading(false);
      } 
      // If API call fails
      else {
        // Mark error as true
        setError(true);
        // Turn off loading because fetching is finished (with error)
        setLoading(false);
      }
    }, 2000); // 2000 milliseconds = 2 seconds delay
  }, []); // Empty dependency array → runs only once on mount

  // Return JSX (UI elements to render)
  return (
    <div>
      {/* Heading for the lab question */}
      <h2>Lab Question: Conditional Rendering with Multiple Components</h2>

      {/* 
        Conditional rendering with ternary operators:
        - If loading is true → show LoadingComponent
        - Else if error is true → show ErrorComponent
        - Else (means loading is false and error is false) → show ProductComponent
      */}
      {loading ? (
        <LoadingComponent />
      ) : error ? (
        <ErrorComponent />
      ) : (
        <ProductComponent product={product} />
      )}
    </div>
  );
};

// Export this component so it can be imported in App.js
export default Task17;
