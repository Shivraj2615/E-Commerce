import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookGrid from "./BookGrid";
import api from "../../services/api";
import "./BooksPage.css";
import { useLocation } from "react-router-dom";

export default function BooksPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const searchValue = query.get("search");

  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
      if (searchValue) {
        const res = await api.get(`/books?search=${searchValue}`);
        setBooks(res.data);
      } else {
        const res = await api.get("/books");
        setBooks(res.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Some Error Occurred");
    }
  }

  useEffect(() => {
    fetchBooks();
  }, [search]);

  return (
    <div className="books-page">
      <div className="books-header">
        <h2>
          {searchValue ? `Search results for "${searchValue}"` : "All Books"}
        </h2>
        <p>Browse our curated collection</p>
      </div>

      {books.length === 0 ? (
        <p className="no-books-msg">No books found</p>
      ) : (
        <BookGrid books={books} />
      )}
    </div>
  );
}
