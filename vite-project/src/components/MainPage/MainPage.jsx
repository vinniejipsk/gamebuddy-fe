import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import SubFeaturedPost from './SubFeaturedPost';
import NavBar from '../NavBar/NavBar';

import { getReviews } from '../../api/reviews';

const defaultTheme = createTheme();

export default function MainPage() {
  const [mainFeaturedPost, setMainFeaturedPost] = useState(null);
  const [subFeaturedPosts, setSubFeaturedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const reviews = await getReviews();
      if (reviews && reviews.length > 0) {
        setMainFeaturedPost({
          game: reviews[0].game,
          description: reviews[0].description,
          rating: reviews[0].rating,
          releaseYear: reviews[0].releaseYear,
          platform: reviews[0].platform,
        });
        const additionalPosts = reviews.slice(1, 9);
        if (Array.isArray(additionalPosts)) {
          setSubFeaturedPosts(additionalPosts);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <NavBar />
        <main>

          {mainFeaturedPost && <MainFeaturedPost post={mainFeaturedPost} />}

          {subFeaturedPosts.map((review, index) => (
            <SubFeaturedPost
              key={index}
              game={review.game}
              description={review.description}
              rating={review.rating}
              releaseYear={review.releaseYear}
              platform={review.platform}
            />

          ))}
        </main>
      </Container>
    </ThemeProvider>
  );
}
