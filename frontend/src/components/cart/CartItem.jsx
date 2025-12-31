import { useContext } from "react";
import BookCard from "../books/BookCard";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

export default function CartItem({ item }) {
  
  const { updateCartItem, removeCartItem } = useContext(CartContext);

  const handleIncrease = () => updateCartItem(item.book._id, item.quantity + 1);
  const handleDecrease = () => {
    if (item.quantity > 1) updateCartItem(item.book._id, item.quantity - 1);
  };
  const handleRemove = () => removeCartItem(item.book._id);

  return (
    <div className="cart-item">
      <BookCard book={item.book} />
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button className="qty-btn" onClick={handleDecrease}>
            -
          </button>
          <span className="qty">{item.quantity}</span>
          <button className="qty-btn" onClick={handleIncrease}>
            +
          </button>
        </div>
        <button className="remove-btn" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}
