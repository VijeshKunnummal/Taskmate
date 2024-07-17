import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import '../Header.css';


export const Header = () => {
  return (
    <header>
      <span className="logo">
        <span>DeutscheCare+ Planner</span>
      </span>
        <nav className="top-nav">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/profile" className="nav-button">
            Profile
          </Link>
        </nav>
    </header>
  );
};
