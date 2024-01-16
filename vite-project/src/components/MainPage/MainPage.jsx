import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';

const sections = [
  { title: 'Game Reviews', url: '#' },
  { title: 'User Reviews', url: '#' },
  { title: 'Create a Review', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a Game',
  description:
    "Game Description...",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'Game Image',
  linkText: 'Continue reading…',
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function MainPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main>
      </Container>
    </ThemeProvider>
  );
}