import { Avatar, Box, Container, Typography } from "@mui/material";
import UserReviews from "./UserReviews";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProfile from "./EditProfile";
// import { getUserReviews } from "../../api/users";

function UserPage() {
  const [userReviews, setUserReviews] = useState([]);
  const { userId } = useParams();
  // console.log(userId);
  const [userData, setUserData] = useState({});
  // console.log(userReviews);
  // console.log(userData);
  const [editProfile, setEditProfile] = useState(null);

  // const user = {
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   avatarUrl: "https://example.com/avatar.jpg",
  // };

  // const userReviews = [
  //   {
  //     id: 1,
  //     title: "Super Mario",
  //     description: "mario mario",
  //     image: "https://source.unsplash.com/random?wallpapers",
  //     imageText: "Game Image",
  //     linkText: "Continue reading…",
  //   },
  //   {
  //     id: 2,
  //     title: "Counter Strike",
  //     description: "pewpewpew",
  //     image: "https://source.unsplash.com/random?wallpapers",
  //     imageText: "blood",
  //     linkText: "lorem ipsum",
  //   },
  //   {
  //     id: 3,
  //     title: "FIFA",
  //     description: "olleh",
  //     image: "https://source.unsplash.com/random?wallpapers",
  //     imageText: "goal",
  //     linkText: "Continue reading…",
  //   },
  // ];

  useEffect(() => {
    fetchReviewsData();
    fetchUserData();
  }, []);

  const BASE_URL = "http://localhost:3000/users";

  async function fetchReviewsData() {
    // by right should get userId from the database
    // (store userId in localStorage upon signup)
    //   const response = await getUserReviews(userId);

    //testing purpose - see all reviews
    // const response = await getUserReviews();
    // const getUserReviewsURL = BASE_URL + `/${userId}/reviews`;
    const getUserReviewsURL = BASE_URL + "/reviews";
    const res = await fetch(getUserReviewsURL, {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${TOKEN}`,
      // },
    });

    const data = await res.json();
    setUserReviews(data.user);
  }

  async function fetchUserData() {
    console.log(userId);
    const getUserDataURL = BASE_URL + `/${userId}`;
    const res = await fetch(getUserDataURL, {
      method: "GET",
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    console.log(data.user);
    setUserData(data.user);
  }
  // console.log(userData);

  // function handleEdit() {
  //   setEditProfile(true);

  // }

  async function updateUserData(data) {
    console.log(userId);
    const putUserDataURL = BASE_URL + `/${userId}`;
    const response = await fetch(putUserDataURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);

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
