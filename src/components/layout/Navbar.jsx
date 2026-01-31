import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Amaze Realtors</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <a href="#">Projects</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </div>

      <button className="cta-btn">Submit Property</button>
    </nav>
  );
}