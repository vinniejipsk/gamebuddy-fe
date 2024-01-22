import * as reviewsAPI from "../api/reviews";

export async function submitReview(reviewData) {
    console.log("service", reviewData)
    const Data = await reviewsAPI.createReview(reviewData);
    return Data;
  }

export async function updateReview(reviewId, reviewData) {
  console.log("service", reviewData);
  try {
    const updatedData = await reviewsAPI.updateReview(reviewId, reviewData);
    return updatedData;
  } catch (error) {
    console.error("Error updating review: ", error);
    throw error;
  }
}