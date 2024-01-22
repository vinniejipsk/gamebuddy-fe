import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ViewPageComponent() {
  const [review, setReview] = useState(null);
  const { reviewId } = useParams(); // Get reviewId from URL

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`http://localhost:3000/reviews/${reviewId}`);
        // REMEMBER TO CHANGE TO BACKEND URL
        if (!response.ok) {
          throw new Error('Failed to fetch review');
        }
        const data = await response.json();
        setReview(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchReview();
  }, [reviewId]);

  if (!review) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h2>{review.game}</h2>
      <p>Rating: {review.rating}</p>
      <p>Platform: {review.platform}</p>
      <p>Release Year: {review.releaseYear}</p>
      <p>Description: {review.description}</p>
    </div>
  );
}