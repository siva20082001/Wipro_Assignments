import React from "react";
import GroceryList from "./GroceryList";
import Car from "./Car";
import Phone from "./Phone";
import SweetsList from "./SweetsList";
import Electronics from "./Electronics";
import CanteenMenu from "./CanteenMenu";
import JuiceList from "./JuiceList";
import Restaurant from "./Restaurant";
import TempleList from "./TempleList";
import TailorShop from "./TailorShop";
import Fruits from "./Fruits";                  // ✅ Lab 11
import TelevisionManager from "./Television";   // ✅ Lab 12
import MarriageForm from "./MarriageForm";      // ✅ Lab 13
import AccessoriesForm from "./AccessoriesForm"; // ✅ Lab 14 (Class)
import BakingItemsForm from "./BakingItemsForm"; // ✅ Lab 14 (Functional)
import FlightBookingControlled from "./FlightBookingControlled";   // ✅ Lab 15
import FlightBookingUncontrolled from "./FlightBookingUncontrolled"; // ✅ Lab 15
import MovieForm from "./MovieForm";            // ✅ Lab 16

function App() {
  const groceries = ["Rice", "Wheat", "Sugar", "Milk", "Oil"];

  return (
    <div className="App">
      <h1>React Labs</h1>

      {/* ✅ Lab 1 */}
      <h2>Lab 1: Grocery List</h2>
      <GroceryList items={groceries} />
      <hr />

      {/* ✅ Lab 2 */}
      <h2>Lab 2: Car Component</h2>
      <Car brand="Toyota" model="Fortuner" color="Black" year="2022" />
      <hr />

      {/* ✅ Lab 3 */}
      <h2>Lab 3: Phone Component</h2>
      <Phone />
      <hr />

      {/* ✅ Lab 4 */}
      <h2>Lab 4: Sweets List</h2>
      <SweetsList />
      <hr />

      {/* ✅ Lab 5 */}
      <h2>Lab 5: Electronics</h2>
      <Electronics />
      <hr />

      {/* ✅ Lab 6 */}
      <h2>Lab 6: Canteen Menu</h2>
      <CanteenMenu />
      <hr />

      {/* ✅ Lab 7 */}
      <h2>Lab 7: Juice List</h2>
      <JuiceList />
      <hr />

      {/* ✅ Lab 8 */}
      <h2>Lab 8: Restaurant</h2>
      <Restaurant />
      <hr />

      {/* ✅ Lab 9 */}
      <h2>Lab 9: Temple List</h2>
      <TempleList />
      <hr />

      {/* ✅ Lab 10 */}
      <h2>Lab 10: Tailor Shop</h2>
      <TailorShop />
      <hr />

      {/* ✅ Lab 11 */}
      <h2>Lab 11: Fruits</h2>
      <Fruits />
      <hr />

      {/* ✅ Lab 12 */}
      <h2>Lab 12: Television Manager</h2>
      <TelevisionManager />
      <hr />

      {/* ✅ Lab 13 */}
      <h2>Lab 13: Marriage Form</h2>
      <MarriageForm />
      <hr />

      {/* ✅ Lab 14 */}
      <h2>Lab 14: Accessories Form (Class Component)</h2>
      <AccessoriesForm />
      <hr />

      <h2>Lab 14: Baking Items Form (Functional Component)</h2>
      <BakingItemsForm />
      <hr />

      {/* ✅ Lab 15 */}
      <h2>Lab 15: Flight Booking Form</h2>
      <div className="row">
        <div className="col-md-6">
          <FlightBookingControlled />
        </div>
        <div className="col-md-6">
          <FlightBookingUncontrolled />
        </div>
      </div>
      <hr />

      {/* ✅ Lab 16 */}
      <h2>Lab 16: Movie Form</h2>
      <MovieForm />
    </div>
  );
}

export default App;
