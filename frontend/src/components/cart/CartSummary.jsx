import { useNavigate } from "react-router-dom";
import "./CartSummary.css";

export default function CartSummary({ cart }) {
  const navigate = useNavigate();

  if (!cart || cart.length === 0) return null;

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0
  );

  return (
    <div className="cart-summary">
      <h3 className="total-price">Total: ₹{totalPrice}</h3>
      <button
        className="checkout-btn"
        onClick={() => navigate("/orders/checkout")}
      >
        PlaceOrder
      </button>
    </div>
  );
}
