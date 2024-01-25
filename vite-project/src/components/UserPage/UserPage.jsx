import { Avatar, Box, Container, Typography } from "@mui/material";
import UserReviews from "./UserReviews";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProfile from "./EditProfile";
import { getToken } from "../../util/security";
// import { getUserReviews } from "../../api/users";

function UserPage() {
  const [userReviews, setUserReviews] = useState([]);
  const { userId } = useParams();
  // console.log(userId);
  const [userData, setUserData] = useState({});
  const [editProfile, setEditProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetchReviewsData();
      await fetchUserData();
    };
    fetchData();
  }, []);

  const BASE_URL = "https://gamebuddy-mnj1.onrender.com/users";

  async function fetchReviewsData() {
    // Retrieve the token and decode its payload
    // const token = getToken();
    // const payload = token
    //   ? JSON.parse(atob(token.split(".")[1])).payload
    //   : null;
    // console.log("token", token);
    // console.log("payload", payload);

    // by right should get userId from the database
    // (store userId in localStorage upon signup)
    //   const response = await getUserReviews(userId);

    //testing purpose - see all reviews
    // const response = await getUserReviews();
    // const getUserReviewsURL = BASE_URL + `/${userId}/reviews`;
    // if (payload && payload._id) {
    //   const userId = payload._id;

    console.log("USER PAGE: user id from payload: ", userId);
    const getUserReviewsURL = BASE_URL + `/reviews/${userId}`;
    console.log(getUserReviewsURL);
    const res = await fetch(getUserReviewsURL, {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${TOKEN}`,
      // },
    });
    console.log("response for get user reviews: ", res);
    const data = await res.json();
    setUserReviews(data.user);
    // }
  }

  async function fetchUserData() {
    // console.log(userId);
    const getUserDataURL = BASE_URL + `/${userId}`;
    const res = await fetch(getUserDataURL, {
      method: "GET",
    });
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    // console.log(data.user);
    setUserData(data.user);
  }
  console.log(userData);

  // function handleEdit() {
  //   setEditProfile(true);

  // }

  async function updateUserData(data) {
    console.log('update used id test', userId);
    const token = localStorage.getItem("token");
    console.log("update user token: ", token);

    const putUserDataURL = BASE_URL + `/${userId}`;
    const response = await fetch(putUserDataURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    // console.log(response);

    if (response.ok) {
      console.log("User data updated successfully");
    } else {
      console.error("Failed to update user data");
    }
  }

  return (
    <>
      {userData && (
        <>
          <Box
            sx={{
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
              mt: 4,
              width: "80vw",
              height: "40vh",
              border: "solid",
            }}
          >
            <Avatar
              alt={userData.name}
              src={userData.avatarUrl}
              sx={{
                width: 100,
                height: 100,
                mx: 5,
              }}
            />
            <Box
              sx={{
                mt: 2,
                textAlign: "center",
                px: 5,
              }}
            >
              <Typography variant="h5">{userData.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {userData.email}
              </Typography>
              <button onClick={() => setEditProfile(true)}>Edit Profile</button>
            </Box>
            {editProfile && (
              <EditProfile
                userData={userData}
                setUserData={setUserData}
                updateUserData={updateUserData}
              />
            )}
          </Box>
          <br />
          <div>User Reviews</div>
          <UserReviews reviews={userReviews} />
        </>
      )}
    </>
  );
}

export default UserPage;
