import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import "./CartPage.css";

export default function CartPage() {
  const { cart, loading } = useContext(CartContext);

  if (!cart || cart.length === 0)
    return <h3 className="cart-message">No Items in Cart</h3>;

  return (
    <div className="cart-page">
      {loading && <p className="cart-loading">Updating cart...</p>}
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>
      <CartSummary cart={cart} />
    </div>
  );
}
