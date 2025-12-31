import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import "./OrderItem.css";

export default function OrderItem({ order }) {
  const { cancelOrder } = useContext(OrderContext);

  const canCancel = order.orderStatus === "placed";

  const date = new Date(order.createdAt);
  const orderDate = date.toLocaleDateString();
  const orderTime = date.toLocaleTimeString();

  return (
    <div className="order-card">
      <div className="order-item-row">
        <h4>Order #{order._id.slice(-6).toUpperCase()}</h4>
        <p>Status: {order.orderStatus}</p>
        <p>Payment: {order.paymentStatus}</p>
        <p>Total: ₹{order.totalAmount}</p>
        <p>Date: {orderDate}</p>
        <p>Time: {orderTime}</p>

        <hr />

        {order.items.map((item) => (
          <div key={item.bookId?._id || item._id} className="order-item-row">
            <img
              src="https://plus.unsplash.com/premium_photo-1677187301444-fd793e33e8d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxib29rc3xlbnwwfHwwfHx8MA%3D%3D"
              width="60"
            />

            <div>
              <p>{item.title}</p>
              <p>
                ₹{item.price} × {item.quantity}
              </p>
            </div>
          </div>
        ))}

        {canCancel && (
          <button className="cancel-btn" onClick={() => cancelOrder(order._id)}>
            Cancel Order
          </button>
        )}
      </div>
    </div>
  );
}
