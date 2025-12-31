import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import OrderItem from "./OrderItem";
import "./OrdersPage.css"

export default function OrdersPage() {
  const { orders, loading } = useContext(OrderContext);

  if (loading) return <h3>Loading...</h3>;

  if (!orders || orders.length === 0) return <h3>No orders placed yet</h3>;

  return (
    <div className="orders-page">
      <h2 className="orders-title">My Orders</h2>

      {orders.map((order) => (
        <OrderItem key={order._id} order={order} />
      ))}
    </div>
  );
}
