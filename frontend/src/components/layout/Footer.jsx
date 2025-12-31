import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top buttons row */}
      <div className="footer-buttons">
        <Link to="/" className="footer-btn">
          About Us
        </Link>
        <Link to="/" className="footer-btn">
          Privacy Policy
        </Link>
        <Link to="/" className="footer-btn">
          Terms & Conditions
        </Link>
      </div>

      {/* Brand centered */}
      <div className="footer-brand">BookNest</div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} BookNest. All rights reserved.
      </div>
    </footer>
  );
}
