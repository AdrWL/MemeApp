import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <NavLink exact to="/" className="footer-link">Strona główna</NavLink>
        <NavLink to="/hot" className="footer-link">Hot</NavLink>
        <NavLink to="/regular" className="footer-link">Regular</NavLink>
      </div>
      <div className="footer-bottom">
        &copy; 2024 MemeApp
      </div>
    </footer>
  );
}
