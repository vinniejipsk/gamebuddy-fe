import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  TextField,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Person as PersonIcon,
  RateReview as RateReviewIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function NavBar({ userId }) {
  console.log(userId);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              component={Link}
              to="/"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Find the reviewed games you like!
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", marginRight: 4 }}>
              <IconButton color="inherit" component={Link} to="/reviews/create">
                <RateReviewIcon />
              </IconButton>
              <Link
                to="/reviews/create"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography variant="h6" color="inherit" component="div">
                  Create Review
                </Typography>
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", marginRight: 4 }}>
              <IconButton
                color="inherit"
                component={Link}
                to={`/user/${userId}`}
              >
                <PersonIcon />
              </IconButton>
              <Link
                to={`/user/${userId}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginRight: 2,
                }}
              >
                <Typography variant="h6" color="inherit" component="div">
                  User
                </Typography>
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                InputProps={{
                  endAdornment: <SearchIcon />,
                }}
                sx={{ backgroundColor: "background.paper", borderRadius: 1 }}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
