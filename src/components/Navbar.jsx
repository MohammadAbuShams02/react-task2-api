import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
