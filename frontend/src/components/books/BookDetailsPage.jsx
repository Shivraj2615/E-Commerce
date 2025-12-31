import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import api from "../../services/api";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import ReviewSection from "./ReviewSection";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "./BookDetailsPage.css";

export default function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const { cart, addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist } = useContext(WishlistContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const isInCart = cart?.some((item) => item.book?._id === id);
  const isInWishlist = wishlist?.some((item) => item.book?._id === id);

  const handleProtectedAction = (action) => {
    if (!user) {
      navigate("/login", { state: { from: location.pathname } });
      toast.error("Please login first");
      return;
    }
    action();
  };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await api.get(`/books/${id}`);
        setBook(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) return null;

  return (
    <div className="book-details-page">
      <div className="book-card">
        {/* Left: Image */}
        <div className="book-image">
          <img src={book.image} alt={book.title} />
        </div>

        {/* Right: Info and actions */}
        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <p className="book-author">by {book.author || "Unknown Author"}</p>
          <p className="book-price">₹ {book.price}</p>
          <p className="book-description">{book.description}</p>

          <div className="book-actions">
            {isInCart ? (
              <button
                className="btn btn-cart"
                onClick={() => navigate("/cart")}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className="btn btn-cart"
                onClick={() => handleProtectedAction(() => addToCart(id))}
              >
                Add to Cart
              </button>
            )}

            <button
              className={`btn btn-wishlist ${
                isInWishlist ? "in-wishlist" : ""
              }`}
              onClick={() =>
                handleProtectedAction(() => {
                  if (!isInWishlist) addToWishlist(id);
                })
              }
              disabled={isInWishlist}
            >
              {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <ReviewSection
        book={book}
        setBook={setBook}
        onProtectedAction={handleProtectedAction}
      />
    </div>
  );
}
