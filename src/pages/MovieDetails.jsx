import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Api} from "../services/fetchApi";
import {LinkStyled} from "./MovieDetail.styled";
import {Button} from "@mui/material";
import {Suspense} from "react";


const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(0)
// const [goBack, setGoBack] = useState(null)

  const {movieId} = useParams();
  console.log(useParams());
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  console.log(backLinkHref);

  console.log(location.state);

// useEffect(() => )

  useEffect(() => {
    Api.getMovieDetails(movieId).then(setMovieDetails)
    // if (!goBack) {
    //   setGoBack(backLinkHref)
    // }
  }, [movieId])
// }, [movieId, goBack, backLinkHref])



if (!movieDetails) {
    return
  }


  return (
    <Box component='main'
         sx={{
           display: 'flex',
           flexDirection: 'column',
           padding: '0 20%',
         }}
    >

      {/*<LinkStyled to={goBack}>*/}
      <LinkStyled to={backLinkHref}>
      <Button variant='outlined'>Go Back</Button>
      </LinkStyled>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        minWidth: '340px',
        marginBottom: 'auto',
      }}>
        <Box sx={{
          display: 'flex',
          minWidth: 340,
        }}>
          <img alt='poster' src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}/>
        </Box>
        <Box sx={{
          padding: '0 50px',
        }}>
          <Typography gutterBottom variant="h5" component="div">
            {movieDetails.original_title}
          </Typography>

          <Typography gutterBottom variant="body1" component="div">
            User Score: {movieDetails.vote_average}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Genres: {movieDetails.genres.map((genre) => (`${genre.name} `))}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            OWERVIEW: {movieDetails.overview}
          </Typography>
        </Box>


      </Box>
      <Box sx={{
        display: 'flex',
        maxWidth: 340,
        justifyContent: 'space-around',
        padding: '5px',
      }}>
        <LinkStyled to="cast" state={{ from: location.state.from }}>
          <Button variant='outlined'>CAST</Button>
        </LinkStyled>
        <LinkStyled to="reviews" state={{ from: location.state.from }}>
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
