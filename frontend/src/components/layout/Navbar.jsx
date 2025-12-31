import { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (searchText) => {
    if (!searchText.trim()) return;
    navigate(`/books/?search=${searchText}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        BookNest
      </Link>

      {/* Search */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search books..."
          className="navbar-search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="navbar-search-btn"
          onClick={() => handleSearch(searchInput)}
        >
          Search
        </button>
      </div>

      {/* Right section */}
      <div className="navbar-right">
        <Link to="/books" className="navbar-icon-btn">
          <span>Books</span>
        </Link>

        {user && (
          <div className="navbar-icons">
            <Link to="/cart" className="navbar-icon-btn">
              <FaShoppingCart className="icon" />
              <span>Cart</span>
            </Link>

            <Link to="/wishlist" className="navbar-icon-btn">
              <FaHeart className="icon" />
              <span>Wishlist</span>
            </Link>
          </div>
        )}

        {user ? (
          <div className="navbar-user" ref={dropdownRef}>
            <button
              className="navbar-user-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaUserCircle />
            </button>

            {dropdownOpen && (
              <div className="navbar-dropdown">
                <Link to="/profile">Profile</Link>
                <Link to="/orders">Orders</Link>
                {user.role === "admin" && <Link to="/admin">Admin</Link>}
                <button className="logout-btn" onClick={logout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="navbar-auth">
            <Link to="/login" className="navbar-icon-btn">
              <span>Login</span>
            </Link>
            <Link to="/register" className="navbar-icon-btn">
              <span>Register</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
