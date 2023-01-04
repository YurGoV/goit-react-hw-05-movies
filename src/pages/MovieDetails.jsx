import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Api} from "../services/fetchApi";
import {LinkStyled} from "./MovieDetail.styled";
import {Button} from "@mui/material";


export const MovieDetails = () => {
  const {movieId} = useParams();
  console.log(useParams());
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  console.log(location.state);



  const [movieDetails, setMovieDetails] = useState(0)

  useEffect(() => {
    Api.getMovieDetails(movieId).then(setMovieDetails)
  }, [movieId])

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
            Genres: {movieDetails.genres.map((genre) => (`${genre.name} `) )}
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
        <LinkStyled to="cast">
          <Button variant='outlined'>CAST</Button>
        </LinkStyled>
        <LinkStyled to="reviews">
          <Button variant='outlined'>REVIEWS</Button>
        </LinkStyled>
      </Box>
      <Outlet/>
    </Box>
  )
}

