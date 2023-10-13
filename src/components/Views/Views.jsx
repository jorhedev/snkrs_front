import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { postReview } from '../../redux/reviewSlice'; // Asegúrate de importar correctamente el módulo donde se encuentra reviewSlice.
import "./Views.css";

const Views = () => {
  const dispatch = useDispatch(); // Obtén la función dispatch.

  // Estados locales para la revisión
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState("Sí");
  const [review, setReview] = useState("");
  const [serviceComment, setServiceComment] = useState("");
  const [sizeSatisfaction, setSizeSatisfaction] = useState("Fiel a la talla");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleRecommendChange = (value) => {
    setRecommend(value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleServiceCommentChange = (event) => {
    setServiceComment(event.target.value);
  };

  const handleSizeSatisfactionChange = (value) => {
    setSizeSatisfaction(value);
  };

  const handleSubmitReview = () => {
    // Crear un objeto con los datos del review
    const reviewData = {
      rating,
      recommend,
      review,
      serviceComment,
      sizeSatisfaction,
    };

    // Llamar a la acción postReview para enviar el review al servidor
    dispatch(postReview(reviewData));
  };
  console.log(setSizeSatisfaction)

  return (
    <div className="container">
      <div className="review-card">
        <h2>Write a Review</h2>
        <div className="rating-section">
          <p>Overall rating</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? "star-filled" : "star-empty"}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="recommend-section">
          <p>Would you recommend this product?</p>
          <div className="recommend-buttons">
            <label className="la">
              <input
                type="radio"
                name="recommend"
                value="Sí"
                checked={recommend === "Sí"}
                onChange={() => handleRecommendChange("Sí")}
              />
              Sí
            </label >
            <label className="la">
              <input
                type="radio"
                name="recommend"
                value="No"
                checked={recommend === "No"}
                onChange={() => handleRecommendChange("No")}
              />
              No
            </label>
          </div>
        </div>
        <div className="size-satisfaction-section">
          <p>Is it according to your size?</p>
          <div className="size-satisfaction-buttons">
            <label className="la">
              <input
                type="radio"
                name="sizeSatisfaction"
                value="Muy pequeña"
                checked={sizeSatisfaction === "Muy pequeña"}
                onChange={() => handleSizeSatisfactionChange("Muy pequeña")}
              />
              Very small
            </label>
            <label className="la">
              <input
                type="radio"
                name="sizeSatisfaction"
                value="Fiel a la talla"
                checked={sizeSatisfaction === "Fiel a la talla"}
                onChange={() => handleSizeSatisfactionChange("Fiel a la talla")}
              />
              True to size
            </label>
            <label className="la">
              <input
                type="radio"
                name="sizeSatisfaction"
                value="Muy grande"
                checked={sizeSatisfaction === "Muy grande"}
                onChange={() => handleSizeSatisfactionChange("Muy grande")}
              />
              Very big
            </label>
          </div>
        </div>
        <div className="review-section">
          <p>Share your opinion</p>
          <textarea
            value={review}
            onChange={handleReviewChange}
            placeholder="Share more details about the product..."
          />
        </div>
        <div className="service-comment-section">
          <p>Service Comment</p>
          <textarea
            value={serviceComment}
            onChange={handleServiceCommentChange}
            placeholder="Comment on the service..."
          />
        </div>
        <button className="boton" onClick={handleSubmitReview}>
          Submit Review
        </button>
      </div>
      <div className="producto">
        <div className="zapa">
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/45fbcb89d3cb46998305af3501362a7d_9366/Zapatillas_Lite_Racer_3.0_Violeta_HP6102_01_standard.jpg"
            alt=""
          />
          <h3>ZAPATILLAS LITE RACER 3.0</h3>
        </div>
        <div className="info">
          <h3>Write the perfect review</h3>
          <p>
            Explain why you like or dont like an aspect of the product, for example: its very comfortable, I love the color, etc. Avoid comments about price or special offers, as they may no longer be relevant when the product review is read. Write as precise and concise as possible. We love details, but make sure your review isnt too long. Watch your mouth. We know that our products excite you a lot, but dont write something you wouldnt want your grandmother to read.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Views;
