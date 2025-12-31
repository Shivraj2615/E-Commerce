import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchCart() {
    if (!user) return;
    try {
      setLoading(true);
      const res = await api.get("/cart");
      setCart(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      setCart([]);
    }
  }, [user]);

  //Add To Cart
  const addToCart = async (bookId) => {
    try {
      setLoading(true);
      const res = await api.post("/cart", { bookId });
      // console.log(res.data);
      await fetchCart();
      toast.success("Item Added to Cart");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add item to cart");
    } finally {
      setLoading(false);
    }
  };

  //Update Cart
  const updateCartItem = async (bookId, quantity) => {
    try {
      setLoading(true);
      await api.put(`/cart/${bookId}`, { quantity });
      await fetchCart();
      toast.success("Cart Updated");
    } catch (error) {
      console.error(error);
      toast.error("Failed to Update Cart");
    } finally {
      setLoading(false);
    }
  };

  //Remove From Cart
  const removeCartItem = async (bookId) => {
    try {
      setLoading(true);
      await api.delete(`/cart/${bookId}`);
      await fetchCart();
      toast.success("Item removed from cart");
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove item from cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        fetchCart,
        addToCart,
        updateCartItem,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
