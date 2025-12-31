import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get wishlist
  const getWishlist = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const res = await api.get("/wishlist");

      // ✅ ensure wishlist is ALWAYS valid
      const safeWishlist = Array.isArray(res.data)
        ? res.data.filter((item) => item && item.book)
        : [];

      setWishlist(safeWishlist);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load wishlist");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getWishlist();
    } else {
      setWishlist([]);
    }
  }, [user]);

  // Add to wishlist
  const addToWishlist = async (bookId) => {
    try {
      setLoading(true);
      await api.post(`/wishlist/${bookId}`);
      toast.success("Book added to wishlist");
      getWishlist();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add book to wishlist");
    } finally {
      setLoading(false);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = async (bookId) => {
    try {
      setLoading(true);
      await api.delete(`/wishlist/${bookId}`);
      toast.success("Book removed from wishlist");
      getWishlist();
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove book from wishlist");
    } finally {
      setLoading(false);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        getWishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
