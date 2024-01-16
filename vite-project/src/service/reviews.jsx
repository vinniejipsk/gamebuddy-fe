import * as usersAPI from "../api/reviews";

export async function CreateReview(reviewData) {
    console.log("service", reviewData)
    const Data = await ReviewAPI.CreateReview(reviewData);
    return Data;
  }

export async function getLoginDetails(reviewData) {
    console.log("getReviewData", reviewData)
    const reviewDetails = await usersAPI.getLoginDetails(reviewData);
    return reviewDetails;
  }