import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  //Single function that can fetch both user and admin orders
  async function fetchMyOrders(apiPath) {
    try {
      setLoading(true);
      const res = await api.get(apiPath);
      setOrders(res.data.orders);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!user) {
      setOrders([]);
      return;
    }

    if (user.role === "user") {
      fetchMyOrders("/orders/user");
    } else if (user.role === "admin") {
      fetchMyOrders("/orders");
    }
  }, [user]);

  // Place Order
  const addOrder = async () => {
    try {
      setLoading(true);
      await api.post("/orders");
      toast.success("Order placed successfully");
      await fetchMyOrders("/orders/user");
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  // Cancel Order
  const cancelOrder = async (orderId) => {
    try {
      setLoading(true);
      await api.put(`/orders/${orderId}`);
      toast.success("Order cancelled successfully");
      await fetchMyOrders("/orders/user");
    } catch (error) {
      console.error(error);
      toast.error("Failed to cancel order");
    } finally {
      setLoading(false);
    }
  };

  // Update Order(admin)
  const updateOrder = async (orderId, status) => {
    try {
      setLoading(true);
      await api.put(`/orders/${orderId}/status`, { status });
      toast.success("Order updated successfully");
      await fetchMyOrders("/orders");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        loading,
        fetchMyOrders,
        addOrder,
        cancelOrder,
        updateOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
