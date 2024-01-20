import * as reviewsAPI from "../api/reviews";

export async function submitReview(reviewData) {
    console.log("service", reviewData)
    const Data = await reviewsAPI.createReview(reviewData);
    return Data;
  }