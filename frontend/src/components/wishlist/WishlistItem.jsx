import { useContext } from "react";
import BookCard from "../books/BookCard";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import "./WishlistItem.css";
import { useNavigate } from "react-router-dom";

export default function WishlistItem({ item }) {
  const { cart, addToCart } = useContext(CartContext);
  const { removeFromWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  const isInCart = cart?.some(
    (cartItem) => cartItem.book?._id === item.book._id
  );

  return (
    <div className="wishlist-item">
      <div className="wishlist-book">
        <BookCard book={item.book} />
      </div>

      <div className="wishlist-actions">
        <button
          className="wishlist-btn remove-btn"
          onClick={() => removeFromWishlist(item.book._id)}
        >
          Remove
        </button>

        {/* Cart Button */}
        {isInCart ? (
          <button
            className="btn btn-cart"
            onClick={() => navigate("/cart")}
          >
            Go To Cart
          </button>
        ) : (
          <button
            className="btn btn-cart"
            onClick={() => addToCart(item.book._id)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
