import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";

const ReviewForm = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isLoggedIn,
  );
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentReviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    const username = localStorage.getItem("username");
    currentReviews.push({ username, rating, review });
    localStorage.setItem("reviews", JSON.stringify(currentReviews));

    const event = new Event("reviewsUpdated");
    window.dispatchEvent(event);
  };

  if (!isLoggedIn) {
    return <p>Пожалуйста, войдите в систему, чтобы оставить отзыв.</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="rating"
        >
          Оценка:
        </label>
        <input
          className="shadow appearance-none border rounded w-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rating"
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="review"
        >
          Отзыв:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Отправить отзыв
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
