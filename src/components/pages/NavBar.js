import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="employerpage">Employer</Link>
            </li>
          </ul>
        </div>

        {/* Search Bar - Right Side */}
        <form className="d-flex ms-auto">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
