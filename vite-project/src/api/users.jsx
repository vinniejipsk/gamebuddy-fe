// This is the base path of the Express route we'll define
const BASE_URL = "https://gamebuddy-mnj1.onrender.com/users";

export async function signUp(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const createURL = BASE_URL + "/register";
  const res = await fetch(createURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    const data = await res.json();
    if (data.user.success === true) {
      return data.user.done;
    } else {
      const errorMsg = data.user.error;
      return errorMsg;
    }
  } else {
    throw new Error("Invalid Sign Up");
  }
}

export async function getLoginDetails(email) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const searchParams = new URLSearchParams({ email: email });
  const getLoginDetailsURL = BASE_URL + "/login?" + searchParams;
  const res = await fetch(getLoginDetailsURL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    const data = await res.json();

    return data;
  } else {
    throw new Error("Invalid User");
  }
}

export async function storeToken(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const createURL = BASE_URL + "/storeToken";
  const res = await fetch(createURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    return res.json();
  } else {
    throw new Error("Invalid Token");
  }
}

export async function loginUser(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const loginURL = BASE_URL + "/login";
  const res = await fetch(loginURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    const data = await res.json();

    return data;
  } else {
    throw new Error("Invalid Login");
  }
}

export async function logoutUser(token, userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const logoutURL = BASE_URL + "/logout";
  const res = await fetch(logoutURL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    return res.json();
  } else {
    throw new Error("Invalid Logout");
  }
}

export async function fetchReviewsData(userId) {
  const getUserReviewsURL = BASE_URL + `/reviews/${userId}`;
  const res = await fetch(getUserReviewsURL, {
    method: "GET",
  });
  const data = await res.json();
  return data.user;
}

export async function fetchUserData(userId) {
  const getUserDataURL = BASE_URL + `/${userId}`;
  const res = await fetch(getUserDataURL, {
    method: "GET",
  });
  const data = await res.json();
  return data.user;
}

export async function updateUserData(data, userId) {
  const token = localStorage.getItem("token");

  const putUserDataURL = BASE_URL + `/${userId}`;
  const response = await fetch(putUserDataURL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    console.log("User data updated successfully");
  } else {
    console.error("Failed to update user data");
  }
}
