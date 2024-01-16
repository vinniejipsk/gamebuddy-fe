import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function UserReviews({ reviews }) {
  return (
    reviews &&
    reviews.map((review) => {
      return (
        <div key={review.id}>
          {" "}
          <Paper
            sx={{
              position: "relative",
              backgroundColor: "grey.800",
              color: "#fff",
              mb: 4,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${review.image})`,
            }}
          >
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: "none" }}
                src={review.image}
                alt={review.imageText}
              />
            }
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,.3)",
              }}
            />
            <Grid container>
              <Grid item md={6}>
                <Box
                  sx={{
                    position: "relative",
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    {review.title}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    {review.description}
                  </Typography>
                  <Link variant="subtitle1" href="#">
                    {review.linkText}
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </div>
      );
    })
  );
}

export default UserReviews;
