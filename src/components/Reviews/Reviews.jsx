import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom";
// import {useEffect, useState} from "react";
// import {Api} from "../../services/fetchApi";
import Divider from '@mui/material/Divider';

import {useFetchApi} from "../../services/useFetchApi";/////


const Reviews = () => {
  const{ movieId } = useParams();
  // console.log(useParams());

  // const [movieReviews, setMovieReviews] = useState('')////

  // useEffect(() => {
  //   Api.getMovieReviews(movieId).then(setMovieReviews)//todo: ?fetch error
  // }, [movieId])

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
          <Divider sx={{
            marginBottom: '10px',
            marginTop: '5px',
            // maxWidth: '40%',
          }} />
        </div>
      ))}
    </Box>
  );
}

export default Reviews;
