import { Link } from "react-router-dom";
import "./BookCard.css";

export default function BookCard({ book }) {

  return (
    <Link className="book-card" to={`/books/${book._id}`}>
      <img src={book.image} alt={book.title} className="book-card-img" />

      <div className="book-card-body">
        <p className="book-card-title">{book.title}</p>
        <p className="book-card-price">₹ {book.price}</p>
      </div>
    </Link>
  );
}
