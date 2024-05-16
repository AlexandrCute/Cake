import { useEffect, useState } from "react";
import RatingStar from "./RatingStar";
import { ReviewItem } from "../models/ReviewItem";

const reviews: ReviewItem[] = [
  {
    username: "atuny0",
    rating: 5,
    review: "Прекрасный торт! Получил заказ вовремя. Очень довольны качеством.",
  },
  {
    username: "hbingley1",
    rating: 4,
    review:
      "Отличное соотношение цены и качества. Все вкусно, но доставка немного задержалась.",
  },
  {
    username: "rshawe2",
    rating: 3,
    review:
      "Качество оставляет желать лучшего. Считаю, что это не соответствует цене.",
  },
  {
    username: "yraigatt3",
    rating: 4,
    review: "Очень довольны качеством.",
  },
  {
    username: "kmeus4",
    rating: 3,
    review: "Качество могло бы быть лучше.",
  },
  {
    username: "dpettegre6",
    rating: 5,
    review: "Прекрасный торт!",
  },
];

const Reviews = () => {
  const [items, setItems] = useState<ReviewItem[]>([]);

  const updateReviews = () => {
    const localStorageReviews = JSON.parse(
      localStorage.getItem("reviews") || "[]",
    );
    const allReviews = [...reviews, ...localStorageReviews];
    setItems(allReviews);
  };

  useEffect(() => {
    updateReviews();

    const handleReviewsUpdated = () => {
      updateReviews();
    };

    window.addEventListener("reviewsUpdated", handleReviewsUpdated);
    return () => {
      window.removeEventListener("reviewsUpdated", handleReviewsUpdated);
    };
  }, []);

  return (
    <div className="px-2">
      <h1 className="text-2xl font-semibold mt-4 mb-2">Отзывы</h1>
      <div
        className="space-y-2"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        {items &&
          items.map(({ username, rating, review }) => (
            <div key={username} className="leading-4" data-test="review-item">
              <h3 className="font-semibold mt-5 text-md">{username}</h3>
              <RatingStar rating={rating} />
              <p className="text-sm leading-4 ">{review}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Reviews;
