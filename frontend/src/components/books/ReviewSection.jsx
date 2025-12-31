import { useState } from "react";
import api from "../../services/api";
import "./ReviewSection.css";
import { toast } from "react-toastify";

export default function ReviewSection({ book, setBook, onProtectedAction }) {
  const [reviewData, setReviewData] = useState({
    rating: 0,
    comment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    onProtectedAction(async () => {
      if (!reviewData.comment || reviewData.rating === 0) return;

      try {
        const res = await api.post(`/reviews/${book._id}`, reviewData);
        setBook(res.data);
        setReviewData({ rating: 0, comment: "" });
        toast.success("Review Added Successfully");
      } catch (error) {
        console.error(error);
        toast.error("Failed to add review");
      }
    });
  };

  return (
    <div className="book-reviews-section">
      <h3>Reviews</h3>

      {/* Review Form */}
      <form className="review-form" onSubmit={handleSubmit}>
        <select
          value={reviewData.rating}
          onChange={(e) =>
            setReviewData({ ...reviewData, rating: Number(e.target.value) })
          }
        >
          <option value={0}>Select Rating</option>
          <option value={1}>⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={5}>⭐⭐⭐⭐⭐</option>
        </select>

        <textarea
          placeholder="Write your review..."
          value={reviewData.comment}
          onChange={(e) =>
            setReviewData({ ...reviewData, comment: e.target.value })
          }
        />

        <button type="submit">Add Review</button>
      </form>

      {/* Reviews List */}
      <div className="reviews-list">
        {book.reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          book.reviews.map((review, index) => (
            <div className="review-item" key={index}>
              <p>
                <strong>{review.author?.name || "User"}</strong> •{" "}
                {review.rating} ⭐
              </p>
              <p>{review.comment}</p>
              <span>{new Date(review.createdAt).toLocaleDateString()}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
