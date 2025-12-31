import WishlistItem from "../../components/wishlist/WishlistItem";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import "./WishlistPage.css";

export default function WishlistPage() {
  const { wishlist, loading } = useContext(WishlistContext);

  if (loading) return <h3 className="wishlist-loading">Loading...</h3>;

  if (!wishlist || wishlist.length === 0)
    return (
      <div className="wishlist-empty">
        <h3>Your wishlist is empty</h3>
        <p>Browse books and add your favorites ❤️</p>
      </div>
    );

  return (
    <div className="wishlist-page">
      <h2 className="wishlist-title">My Wishlist</h2>

      <div className="wishlist-list">
        {wishlist.map((item) => (
          <WishlistItem key={item.book._id} item={item} />
        ))}
      </div>
    </div>
  );
}
