import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function AdminProtectedRoute() {
  const { user, loading } = useContext(AuthContext);
  // console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user && user.role === "admin") {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}
