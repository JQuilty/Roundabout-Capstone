import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Roundabout</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/brackets" className="nav-link">Brackets</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Tournament</Link>
          </li>
          <li className="navbar-item">
          <Link to="/participant" className="nav-link">Participant</Link>
          </li>
          <li className="navbar-item">
          <Link to="/match" className="nav-link">Match</Link>
          </li>
          <li className="navbar-item">
          <Link to="/management" className="nav-link">Management</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
