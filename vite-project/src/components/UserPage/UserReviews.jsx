import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function UserReviews({ reviews }) {
  return (
    reviews &&
    reviews.map((review) => {
      return (
        <div key={review._id}>
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
                    {review.game}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    {review.description}
                  </Typography>
                  <Typography variant="subtitle1">{review.platform}</Typography>
                  <Typography variant="subtitle1">{review.rating}</Typography>
                  <Typography variant="subtitle1">
                    {review.releaseYear}
                  </Typography>
                  <Link to={`/reviews/${review._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography 
                    variant="subtitle2" 
                    color="primary" 
                    style={{ 
                      cursor: 'pointer', 
                      marginTop: '16px', // Adjust top margin 
                      fontSize: '1.1rem' // Set specific font size 
                    }}
                  >
                    Learn More
                  </Typography>
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
