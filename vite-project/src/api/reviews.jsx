// This is the base path of the Express route we'll define
const BASE_URL = "http://localhost:3000/reviews";

export async function createReview(reviewData) {
  const createURL = BASE_URL + '/create';
  const token = localStorage.getItem('token'); // Get the stored JWT token

  try {
    const res = await fetch(createURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Include the JWT token in the request
      },
      body: JSON.stringify(reviewData),
    });

    if (res.ok) {
      return await res.json();
    } else {
      const errorData = await res.text();
      throw new Error(errorData);
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