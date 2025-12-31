import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./ProfilePage.css";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Loading user profile...</p>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>User Profile</h2>

        <div className="profile-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <p>
            <strong>Cart Items:</strong> {user.cart?.length || 0}
          </p>
          <p>
            <strong>Wishlist Items:</strong> {user.wishlist?.length || 0}
          </p>
          <p>
            <strong>Member Since:</strong>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Optional: Edit button */}
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
}
