import { Link } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Looks like this page got lost between the shelves.</p>
      <Link to="/" className="notfound-btn">
        Go Back Home
      </Link>
    </div>
  );
}
