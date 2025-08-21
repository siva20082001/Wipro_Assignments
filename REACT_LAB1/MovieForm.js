import React, { Component } from "react";  
import "bootstrap/dist/css/bootstrap.min.css";  // ✅ Requirement 6: Using Bootstrap for styling

// ✅ Component Name as required: MovieForm
class MovieForm extends Component {
  constructor(props) {
    super(props);
    console.log("constructor executed"); // ✅ Lifecycle Method: constructor()

    // ✅ State initialization (Requirement 5: Manage form input values + movie list)
    this.state = {
      title: "",             // Movie Title (text)
      director: "",          // Director (text)
      year: "",              // Release Year (number)
      genre: "Action",       // Genre (default: Action)
      rating: "",            // Rating (radio button: 1–5)
      description: "",       // Description (textarea)
      platforms: [],         // Streaming Platforms (checkboxes)
      movies: [],            // List of movies (Requirement: Maintain movie list)
      showForm: true,        // ✅ For demonstrating componentWillUnmount with toggle
    };
  }

  // ✅ Lifecycle method: static getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps executed");
    return null; // No state changes from props
  }

  // ✅ Lifecycle method: componentDidMount
  componentDidMount() {
    console.log("componentDidMount executed");
  }

  // ✅ Lifecycle method: shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate executed");
    return true; // Always allow re-render
  }

  // ✅ Lifecycle method: getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate executed");
    return null;
  }

  // ✅ Lifecycle method: componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate executed");
  }

  // ✅ Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    console.log("componentWillUnmount executed");
  }

  // ✅ Handle input changes (Requirement 5: Maintain form input values)
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") { 
      // ✅ Handle multiple checkbox selection for Streaming Platforms
      let platforms = [...this.state.platforms];
      if (checked) {
        platforms.push(value);
      } else {
        platforms = platforms.filter((p) => p !== value);
      }
      this.setState({ platforms });
    } else {
      this.setState({ [name]: value }); // Update other form fields
    }
  };

  // ✅ Handle form submission (Requirement 3: Add Movie functionality)
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, director, year, genre, rating, description, platforms } =
      this.state;

    // ✅ New movie object created from state fields
    const newMovie = {
      title,
      director,
      year,
      genre,
      rating,
      description,
      platforms,
    };

    // ✅ Add new movie to movies list, reset form fields after submission
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
      title: "",
      director: "",
      year: "",
      genre: "Action",
      rating: "",
      description: "",
      platforms: [],
    }));
  };

  // ✅ Lifecycle Method: render()
  render() {
    console.log("render executed");

    // Destructure state variables for easy use in JSX
    const { title, director, year, genre, rating, description, platforms, movies, showForm } =
      this.state;

    return (
      <div className="container mt-4">
        {/* ✅ Toggle button to demonstrate componentWillUnmount */}
        <button
          className="btn btn-secondary mb-3"
          onClick={() => this.setState({ showForm: !showForm })}
        >
          Toggle Form
        </button>

        {/* ✅ Conditional rendering of form */}
        {showForm && (
          <div className="card p-3">
            <h3>Add Movie</h3>
            <form onSubmit={this.handleSubmit}>
              
              {/* ✅ Movie Title input field */}
              <div className="form-group">
                <label>Movie Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={title}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* ✅ Director input field */}
              <div className="form-group">
                <label>Director</label>
                <input
                  type="text"
                  name="director"
                  className="form-control"
                  value={director}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* ✅ Release Year input field */}
              <div className="form-group">
                <label>Release Year</label>
                <input
                  type="number"
                  name="year"
                  className="form-control"
                  value={year}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* ✅ Genre dropdown field */}
              <div className="form-group">
                <label>Genre</label>
                <select
                  name="genre"
                  className="form-control"
                  value={genre}
                  onChange={this.handleChange}
                >
                  <option>Action</option>
                  <option>Comedy</option>
                  <option>Drama</option>
                  <option>Sci-Fi</option>
                  <option>Horror</option>
                </select>
              </div>

              {/* ✅ Rating radio buttons */}
              <div className="form-group">
                <label>Rating</label>
                <div>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <label key={num} className="mr-2">
                      <input
                        type="radio"
                        name="rating"
                        value={num}
                        checked={rating === String(num)}
                        onChange={this.handleChange}
                      />{" "}
                      {num}
                    </label>
                  ))}
                </div>
              </div>

              {/* ✅ Description textarea */}
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>

              {/* ✅ Streaming Platforms checkboxes */}
              <div className="form-group">
                <label>Available on Streaming Platforms</label>
                <div>
                  {["Netflix", "Amazon Prime", "Disney+", "Others"].map(
                    (platform) => (
                      <label key={platform} className="mr-2">
                        <input
                          type="checkbox"
                          value={platform}
                          checked={platforms.includes(platform)}
                          onChange={this.handleChange}
                        />{" "}
                        {platform}
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* ✅ Submit Button */}
              <button type="submit" className="btn btn-primary">
                Add Movie
              </button>
            </form>
          </div>
        )}

        {/* ✅ Display added movies in a table (Requirement 3) */}
        {movies.length > 0 && (
          <table className="table mt-4">
            <thead>
              <tr>
                <th>Title</th>
                <th>Director</th>
                <th>Release Year</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Description</th>
                <th>Platforms</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr key={index}>
                  <td>{movie.title}</td>
                  <td>{movie.director}</td>
                  <td>{movie.year}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.rating}</td>
                  <td>{movie.description}</td>
                  <td>{movie.platforms.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default MovieForm;  // ✅ Component Export
