import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function PublicRoute() {
  const { user } = useContext(AuthContext);

  // If user is logged in, redirect to homepage or dashboard
  if (user) {
    return <Navigate to="/books" />;
  }

  // Otherwise, render child routes
  return <Outlet />;
}
