import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { OrderContext } from "../../context/OrderContext";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

export default function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  // Shipping address state
  const [address, setAddress] = useState({
    fullName: "",
    mobile: "",
    line: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.book.price * item.quantity,
    0
  );

  const handleConfirm = () => {
    for (let key in address) {
      if (!address[key]) {
        alert("Please fill all address fields");
        return;
      }
    }

    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    addOrder();

    navigate("/orders");
  };

  if (!cart || cart.length === 0)
    return <h3>Your cart is empty. Add items before checkout.</h3>;

  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-container">
        {/* Shipping Address */}
        <section className="checkout-section">
          <h3>Shipping Address</h3>
          <div className="checkout-form">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={address.fullName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={address.mobile}
              onChange={handleChange}
            />
            <input
              type="text"
              name="line"
              placeholder="Address Line"
              value={address.line}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleChange}
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={address.pincode}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Payment Method */}
        <section className="checkout-section">
          <h3>Payment Method</h3>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
            <label>
              <input type="radio" value="card" disabled />
              Card (Coming Soon)
            </label>
            <label>
              <input type="radio" value="upi" disabled />
              UPI (Coming Soon)
            </label>
            <label>
              <input type="radio" value="netbanking" disabled />
              Net Banking (Coming Soon)
            </label>
          </div>
        </section>

        {/* Order Summary */}
        <section className="checkout-section">
          <h3>Order Summary</h3>
          <div className="order-summary">
            {cart.map((item) => (
              <div className="checkout-item" key={item.book._id}>
                <img
                  src={item.book.image || "/placeholder-book.png"}
                  alt={item.book.title}
                  className="checkout-item-img"
                />
                <div className="checkout-item-details">
                  <p className="item-title">{item.book.title}</p>
                  <p className="item-price">
                    ₹{item.book.price} × {item.quantity}
                  </p>
                </div>
              </div>
            ))}
            <p className="checkout-total">
              <strong>Total: ₹{totalAmount}</strong>
            </p>
          </div>
        </section>
      </div>

      {/* Confirm Button */}
      <button className="confirm-btn" onClick={handleConfirm}>
        Confirm Order
      </button>
    </div>
  );
}
