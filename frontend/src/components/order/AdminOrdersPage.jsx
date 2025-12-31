import { useContext, useEffect } from "react";
import "./AdminOrdersPage.css";
import { OrderContext } from "../../context/OrderContext";

export default function AdminOrdersPage() {
  const { orders, loading, updateOrder } = useContext(OrderContext);

  if (loading) return <h3 className="loading">Loading...</h3>;

  if (!orders || orders.length === 0)
    return <h3 className="no-orders">No Orders Placed</h3>;

  return (
    <div className="admin-orders-container">
      <h3 className="page-title">Admin Orders Page</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Books</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Action</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="order-row">
              <td className="order-id">{order._id}</td>
              <td className="order-user">
                {order.user.name} ({order.user.email})
              </td>
              <td className="order-books">
                {order.items.map((item) => (
                  <div key={item._id} className="book-item">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1677187301444-fd793e33e8d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxib29rc3xlbnwwfHwwfHx8MA%3D%3D"
                      alt={item.title}
                      className="book-img"
                    />
                    <span className="book-title">
                      {item.title} ({item.quantity})
                    </span>
                  </div>
                ))}
              </td>
              <td className="order-total">&#8377;{order.totalAmount}</td>
              <td className={`order-status ${order.orderStatus}`}>
                {order.orderStatus}
              </td>
              <td className="order-action">
                <select
                  className="status-select"
                  name="status"
                  value={order.orderStatus}
                  disabled={
                    order.orderStatus === "delivered" ||
                    order.orderStatus === "cancelled"
                  }
                  onChange={(e) => updateOrder(order._id, e.target.value)}
                >
                  <option value="placed">placed</option>
                  <option value="shipped">shipped</option>
                  <option value="delivered">delivered</option>
                  <option value="cancelled">cancelled</option>
                </select>
              </td>
              <td className="order-created">
                {new Date(order.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
