// This is the base path of the Express route we'll define
const BASE_URL = "http://localhost:3000/reviews";

export async function createReview(reviewData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const createURL = BASE_URL + '/reviews/create';
  console.log(createURL);
  const res = await fetch(createURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(reviewData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    console.log(res);
    return res.json();
  } else {
    throw new Error("Error creating review");
  }
}

// export async function getLoginDetails(reviewDetails) {
//   // Fetch uses an options object as a second arg to make requests
//   // other than basic GET requests, include data, headers, etc.
//   const searchParams = new URLSearchParams({"email":reviewDetails});
//   const getLoginDetailsURL = BASE_URL + '/login?' + searchParams;
//   console.log(getLoginDetailsURL);
//   const res = await fetch(getLoginDetailsURL, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//     // Fetch requires data payloads to be stringified
//     // and assigned to a body property on the options object
//   });
//   // Check if request was successful
//   if (res.ok) {
//     // res.json() will resolve to the JWT
//     console.log(res);
//     return res.json();
//   } else {
//     throw new Error("Invalid User");
//   }
// }