import { Avatar, Box, Container, Typography } from "@mui/material";
import UserReviews from "./UserReviews";
import { useEffect } from "react";

function UserPage() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: "https://example.com/avatar.jpg",
  };

  const userReviews = [
    {
      id: 1,
      title: "Super Mario",
      description: "mario mario",
      image: "https://source.unsplash.com/random?wallpapers",
      imageText: "Game Image",
      linkText: "Continue reading…",
    },
    {
      id: 2,
      title: "Counter Strike",
      description: "pewpewpew",
      image: "https://source.unsplash.com/random?wallpapers",
      imageText: "blood",
      linkText: "lorem ipsum",
    },
    {
      id: 3,
      title: "FIFA",
      description: "olleh",
      image: "https://source.unsplash.com/random?wallpapers",
      imageText: "goal",
      linkText: "Continue reading…",
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
          alt={user.name}
          src={user.avatarUrl}
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
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {user.email}
          </Typography>
        </Box>
      </Box>
      <br />
      <div>User Reviews</div>
      <UserReviews reviews={userReviews} />
    </>
  );
}

export default UserPage;
