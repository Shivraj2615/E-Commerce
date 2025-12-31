import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

import "../auth/Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Login to continue exploring books</p>

        <form className="auth-form" onSubmit={handleLogin}>
          <input
            className="auth-input"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
