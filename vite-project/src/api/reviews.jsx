// This is the base path of the Express route we'll define
const BASE_URL = "http://localhost:3000/reviews";

export async function createReview(reviewData) {
  const createURL = BASE_URL + '/create';
  try {
    const res = await fetch(createURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    });
    if (res.ok) {
      return res.json();
    } else {
      const error = await res.text();
      throw new Error(error);
    }
  } catch (error) {
    console.error("Error creating review: ", error);
    throw error;
  }
}

export async function getReviews() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}