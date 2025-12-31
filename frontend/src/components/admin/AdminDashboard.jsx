import { useNavigate } from "react-router-dom";
import AdminBooksPage from "./AdminBooksPage";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <button
        className="add-book-btn"
        onClick={() => navigate("/admin/books/add")}
      >
        Add New Book
      </button>

      <button
        className="view-orders"
        onClick={() => navigate("/admin/orders")}
      >
        View Orders
      </button>

      <AdminBooksPage />
    </div>
  );
}
