import {Outlet, useLocation, useParams} from "react-router-dom";
import {Suspense} from "react";

import {useFetchApi} from "../services/useFetchApi";

import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import {boxImgStyles, boxLinksStyles, boxMainCardStyles, boxMainStyles, LinkStyled} from "./MovieDetail.styled";
import {Button} from "@mui/material";
import genericPoster from '../img/poster.jpg'


const MovieDetails = () => {

  const {movieId} = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  const {movieDetails} = useFetchApi(movieId, 'details');
  const {poster_path, original_title, vote_average, genres, overview} = movieDetails

  if (!movieDetails) {
    return null
  }

  return (
    <Box component='main' sx={boxMainStyles}>

      <LinkStyled to={backLinkHref}>
        <Button variant='outlined'>Go Back</Button>
      </LinkStyled>
      <Box sx={boxMainCardStyles}>
        <Box sx={boxImgStyles}>
          <img alt='poster' src={poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : genericPoster}/>
        </Box>
        <Box sx={{padding: '0 50px',}}>
          <Typography gutterBottom variant="h5" component="div">
            {original_title}
          </Typography>

          <Typography gutterBottom variant="body1" component="div">
            User Score: {vote_average}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Genres: {genres.map((genre) => (`${genre.name} `))}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            OWERVIEW: {overview}
          </Typography>
        </Box>


      </Box>
      <Box sx={boxLinksStyles}>
        <LinkStyled to="cast" state={{from: location.state?.from ?? "/"}}>
          <Button variant='outlined'>CAST</Button>
        </LinkStyled>
        <LinkStyled to="reviews" state={{from: location.state?.from ?? "/"}}>
          <Button variant='outlined'>REVIEWS</Button>
        </LinkStyled>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </Box>
  )
}

export default MovieDetails;
