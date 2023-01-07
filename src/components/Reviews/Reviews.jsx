import Box from '@mui/material/Box';
import {useParams} from "react-router-dom";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {useFetchApi} from "../../services/useFetchApi";


const Reviews = () => {
  const {movieId} = useParams();
  const {movieReviews} = useFetchApi(movieId, 'reviews')

  if (!movieReviews) {
    return null
  }

  if (movieReviews.length === 0) {
    return (
      <Typography component='h1'>
        THERE ARE NO REVIEWS FOR THIS FILM
      </Typography>
    )
  }

  return (
    <Box>
      {movieReviews.map(({id, author, content}) => (
        <div key={id}>
          <Typography variant='h6'> Author: {author} </Typography>
          <Typography> {content} </Typography>
          <Divider sx={{marginBottom: '10px', marginTop: '5px',}}/>
        </div>
      ))}
    </Box>
  );
};

export default Reviews;
