import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./AdminBooksPage.css";

export default function AdminBooksPage() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await api.get("/books");
        setBooks(res.data);
      } catch (error) {
        console.error(error);
        toast.error("Some Error Occurred");
      }
    }
    fetchBooks();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/books/${id}/edit`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;
    try {
      await api.delete(`/books/${id}`);
      setBooks([...books.filter((book) => book._id !== id)]);
      toast.success("Book Deleted Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to Delete");
    }
  };

  return (
    <div className="admin-books-page">
      <h2>All Books List</h2>
      <div className="table-card">
        <table className="admin-books-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>
                  <img
                    src={book.image}
                    alt={book.title}
                    className="book-thumb"
                  />
                </td>
                <td>{book.title}</td>
                <td>₹ {book.price}</td>
                <td>{book.quantity}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(book._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
