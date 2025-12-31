import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "../auth/Auth.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const success = await register({ name, email, password });
    if (success) {
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Create an Account</h1>
        <p className="auth-subtitle">Purchase your favourite book now</p>

        <form className="auth-form" onSubmit={handleSignup}>
          <input
            className="auth-input"
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
