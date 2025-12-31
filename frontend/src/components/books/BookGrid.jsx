import BookCard from "./BookCard";
import "./BookGrid.css";

export default function BookGrid({ books }) {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
}
