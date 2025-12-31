import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Auth
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// Pages
import BooksPage from "./components/books/BooksPage";
import BookDetailsPage from "./components/books/BookDetailsPage";
import WelcomePage from "./components/layout/WelcomePage";
import PageNotFound from "./components/layout/PageNotFound";

// Admin
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminBooksPage from "./components/admin/AdminBooksPage";
import AddBookPage from "./components/admin/AddBookPage";
import EditBookPage from "./components/admin/EditBookPage";

// Routes
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";

//Cart
import CartPage from "./components/cart/CartPage";

//Wishlist
import WishlistPage from "./components/wishlist/WishlistPage";

//Order
import OrdersPage from "./components/order/OrdersPage";
import CheckoutPage from "./components/order/CheckoutPage";
import AdminOrdersPage from "./components/order/AdminOrdersPage";

//Profile
import ProfilePage from "./components/profile/ProfilePage";

function App() {
  return (
    <div className="app-container">
      <ToastContainer />
      <Navbar />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<WelcomePage />} />

          {/* Public Routes */}
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* User Routes */}
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminProtectedRoute />}>
            <Route index element={<AdminDashboard />} />
            <Route path="books" element={<AdminBooksPage />} />
            <Route path="books/add" element={<AddBookPage />} />
            <Route path="books/:id/edit" element={<EditBookPage />} />
            <Route path="orders" element={<AdminOrdersPage />} />
          </Route>

          {/* Cart Routes */}
          <Route path="/cart" element={<ProtectedRoute />}>
            <Route index element={<CartPage />} />
          </Route>

          {/* Wishlist Route */}
          <Route path="/wishlist" element={<ProtectedRoute />}>
            <Route index element={<WishlistPage />} />
          </Route>

          {/* OrderRoute */}
          <Route path="/orders" element={<ProtectedRoute />}>
            <Route index element={<OrdersPage />} />
            <Route path="/orders/checkout" element={<CheckoutPage />} />
          </Route>

          {/* Profile */}
          <Route path="/profile" element={<ProfilePage />} />

          {/* 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
