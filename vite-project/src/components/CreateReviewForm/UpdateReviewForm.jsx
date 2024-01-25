import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteReview, updateReview } from '../../service/reviews';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';

const defaultTheme = createTheme();

export default function UpdateReviewForm() {
  const [reviewData, setReviewData] = useState({
    userId: '',
    game: '',
    rating: '',
    platform: '',
    releaseYear: '',
    description: ''
  });
  const [error, setError] = useState('');
  const { reviewId } = useParams();
  const navigate = useNavigate();
  const userId = reviewData.userId;

  // const userId = localStorage.getItem('_id');
  // console.log("UserId:", userId);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`http://localhost:3000/reviews/${reviewId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch review');
        }
        const data = await response.json();
        console.log('test', data)
        setReviewData({
          userId: data.userId || '',
          game: data.game || '',
          rating: data.rating || '',
          platform: data.platform || '',
          releaseYear: data.releaseYear || '',
          description: data.description || '',
        });
        // console.log(reviewData)
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchReview();
  }, [reviewId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReviewData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAutocompleteChange = (name) => (event, value) => {
    const newValue = value && value.label ? value.label : value;
    setReviewData({ ...reviewData, [name]: newValue });
  };

  const handleRatingChange = (event, value) => {
    const newRating = value && value.label ? parseInt(value.label, 10) : value;
    setReviewData({ ...reviewData, rating: newRating });
  };

  const handleDelete = async () => {
    try {
      await deleteReview(reviewId, userId);
      navigate("/");
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  function validateSelection(input, list) {
    return list.some(item => item.label === input) ? input : `Unknown ${input}`;
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    // Validate the selections
    const validatedReviewData = {
      ...reviewData,
      game: validateSelection(reviewData.game, gamelist),
      platform: validateSelection(reviewData.platform, platformlist),
      rating: ratinglist.includes(reviewData.rating) ? reviewData.rating : "Unknown rating"
    };
  
    try {
      const updatedReview = await updateReview(reviewId, validatedReviewData, userId);
      navigate(`/reviews/${reviewId}`);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Update your review
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Autocomplete
                  disablePortal
                  id="game"
                  options={gamelist}
                  value={reviewData.game ? { label: reviewData.game } : null}
                  onChange={handleAutocompleteChange("game")}
                  renderInput={(params) => (
                    <TextField {...params} label="Game" />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Autocomplete
                  disablePortal
                  id="platform"
                  options={platformlist}
                  value={reviewData.platform ? { label: reviewData.platform } : null}
                  onChange={handleAutocompleteChange("platform")}
                  renderInput={(params) => (
                    <TextField {...params} label="Platform" />
                  )}
                />
              </Grid>
              <Grid item xs={3}>
                <Autocomplete
                  disablePortal
                  id="rating"
                  options={ratinglist.map((rating) => ({ label: rating }))}
                  value={reviewData.rating ? { label: reviewData.rating } : null}
                  onChange={handleAutocompleteChange("rating")}
                  getOptionLabel={(option) => option ? option.label.toString() : ""}
                  renderInput={(params) => (
                    <TextField {...params} label="Rating" />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="description"
                  label="Description"
                  multiline
                  rows={10}
                  value={reviewData.description}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Review
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 1, mb: 2 }}
              onClick={handleDelete}
            >
              Delete Review
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// Add the lists for games, platforms, and ratings
const gamelist = [
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
];

const platformlist = [
  { label: "PC" },
  { label: "Mac" },
  { label: "PS5" },
  { label: "PS4" },
  { label: "Xbox One" },
  { label: "Xbox 360" },
  { label: "Nintendo Switch" },
  { label: "Android" },
  { label: "iOS" },
];

const ratinglist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
