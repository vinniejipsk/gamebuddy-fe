import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { updateReview } from '../../service/reviews';

export default function UpdateReviewForm() {
  const [reviewData, setReviewData] = useState({
    game: '',
    rating: '',
    platform: '',
    releaseYear: '',
    description: ''
  });
  const [error, setError] = useState('');
  const { reviewId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`http://localhost:3000/reviews/${reviewId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch review');
        }
        const data = await response.json();
        setReviewData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchReview();
  }, [reviewId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const updatedReview = await updateReview(reviewId, reviewData);
      navigate(`/reviews/${reviewId}`);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Game:</label>
        <input
          type="text"
          name="game"
          value={reviewData.game}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={reviewData.rating}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Platform:</label>
        <input
          type="text"
          name="platform"
          value={reviewData.platform}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Release Year:</label>
        <input
          type="number"
          name="releaseYear"
          value={reviewData.releaseYear}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={reviewData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Update Review</button>
    </form>
  );
}
