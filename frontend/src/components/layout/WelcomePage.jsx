import { Link } from "react-router-dom";
import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <h1>Welcome to BookNest</h1>
        <p>
          Discover a world of books — from timeless classics to modern reads.
        </p>
        <Link to="/books" className="welcome-btn">
          Explore Books
        </Link>
      </div>
    </div>
  );
}
