import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ================= CHECK AUTH ON LOAD =================
  const checkAuth = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await api.get("/auth/me");
      setUser(res.data.user);
    } catch (error) {
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // ================= REGISTER =================
  const register = async ({ name, email, password }) => {
    if (!name || !email || !password) {
      toast.error("Fill all fields");
      return false;
    }

    try {
      setLoading(true);
      await api.post("/register", { name, email, password });
      toast.success("Signup successful. Please login.");
      return true;
    } catch (error) {
      const message = error.response?.data || "Signup failed";
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ================= LOGIN =================
  const login = async (email, password) => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return false;
    }

    try {
      setLoading(true);
      const res = await api.post("/login", { email, password });

      // ✅ STORE TOKEN IN LOCALSTORAGE
      localStorage.setItem("token", res.data.token);

      setUser(res.data.user);
      toast.success("Login successful");
      return true;
    } catch (error) {
      const message = error.response?.data || "Login failed";
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ================= LOGOUT =================
  const logout = async () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
