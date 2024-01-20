import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SubFeaturedPost(props) {
  const { game, description, rating, releaseYear, platform, image } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image || "/static/images/cards/default-image.jpg"} // Use a default image if none provided
        title={game}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {rating} / Release Year: {releaseYear} / Platform: {platform}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default SubFeaturedPost;
