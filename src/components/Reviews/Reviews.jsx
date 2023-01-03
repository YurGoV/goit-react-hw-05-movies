import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Api} from "../../services/fetchApi";

export const Reviews = () => {
  const{ movieId } = useParams();

  console.log(useParams());

  const [movieReviews, setMovieReviews] = useState('')

  useEffect(() => {
    Api.getMovieReviews(movieId).then(setMovieReviews)
  }, [movieId])

  if (!movieReviews) {
    return null
  }

  if (movieReviews.length === 0) {
    return (
      <Typography>
        THERE ARE NO REVIEWS ON THIS FILM
      </Typography>
    )
  }

  return (
    <Box>
      {movieReviews.map(({id, author, content}) => (
        <div key={id}>
          <Typography> Author: {author} </Typography>
          <Typography> {content} </Typography>

        </div>
      ))}
    </Box>
  );
}
