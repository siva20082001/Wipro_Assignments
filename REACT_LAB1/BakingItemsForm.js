import React, { useState } from "react";

function BakingItemsForm() {
  // Single state object to store all input fields (useState)
  const [form, setForm] = useState({
    name: "",         // text → Item Name
    quantity: "",     // number → Quantity
    ingredients: "",  // text → Ingredients
    bakingTime: "",   // number → Baking Time
    category: "Cake", // select → Category (default value)
  });

  // State to store list of submitted baking items
  const [items, setItems] = useState([]);

  // Handles input changes and updates form state dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // spread → updates one field without losing others
  };

  // On submit → prevent reload, add item to list, reset form
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, form]); // add new form data to items list
    // Reset form to default values
    setForm({
      name: "",
      quantity: "",
      ingredients: "",
      bakingTime: "",
      category: "Cake",
    });
  };

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h3>🍰 Baking Items Form</h3>
        {/* Controlled Form */}
        <form onSubmit={handleSubmit}>
          {/* Text input */}
          <div className="form-group mb-2">
            <label>Item Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Number input */}
          <div className="form-group mb-2">
            <label>Quantity</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              required
            />
          </div>

          {/* Text input for ingredients */}
          <div className="form-group mb-2">
            <label>Ingredients</label>
            <input
              type="text"
              className="form-control"
              name="ingredients"
              value={form.ingredients}
              onChange={handleChange}
              required
            />
          </div>

          {/* Number input for baking time */}
          <div className="form-group mb-2">
            <label>Baking Time (minutes)</label>
            <input
              type="number"
              className="form-control"
              name="bakingTime"
              value={form.bakingTime}
              onChange={handleChange}
              required
            />
          </div>

          {/* Dropdown (select) */}
          <div className="form-group mb-2">
            <label>Category</label>
            <select
              className="form-control"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option>Cake</option>
              <option>Bread</option>
              <option>Pastry</option>
            </select>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary mt-2">
            Add Baking Item
          </button>
        </form>
      </div>

      {/* Conditionally render items in Bootstrap table */}
      {items.length > 0 && (
        <div className="card mt-4 p-3">
          <h4>Baking Items List</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Ingredients</th>
                <th>Baking Time</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {/* Dynamically render each item from items array */}
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.bakingTime} mins</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BakingItemsForm;
