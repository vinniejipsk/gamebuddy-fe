import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { Link } from 'react-router-dom';

function MainFeaturedPost(props) {
  const { post } = props;
  const theme = useTheme();

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'white',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >

      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.game}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Rating: {post.rating} / Release Year: {post.releaseYear} / Platform: {post.platform}
            </Typography>
            <Link to={`/reviews/${post.reviewId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography 
                variant="subtitle1" 
                color="primary" 
                style={{ 
                  cursor: 'pointer', 
                  marginTop: '16px', // Adjust top margin 
                  fontSize: '1.4rem' // Set specific font size 
                }}
              >
                Learn More
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainFeaturedPost;