import * as reviewsAPI from "../api/reviews";

export async function submitReview(reviewData) {
    console.log("service", reviewData)
    const Data = await reviewsAPI.createReview(reviewData);
    return Data;
  }

export async function updateReview(reviewId, reviewData, userId) {
  console.log("userId test", userId);
  try {
    const updatedData = await reviewsAPI.updateReview(reviewId, reviewData, userId);
    return updatedData;
  } catch (error) {
    console.error("Error updating review: ", error);
    throw error;
  }
}

export async function deleteReview(reviewId, userId) {
  try {
    const response = await reviewsAPI.deleteReview(reviewId, userId);
    return response;
  } catch (error) {
    console.error("Error deleting review:", error);
    throw error;
  }
}