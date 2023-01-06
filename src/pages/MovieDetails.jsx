import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {LinkStyled} from "./MovieDetail.styled";
import {Button} from "@mui/material";
import {Suspense} from "react";
import {useFetchApi} from "../services/useFetchApi";/////
import genericPoster from '../img/poster.jpg'

const MovieDetails = () => {

  const {movieId} = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  // console.log(backLinkHref);
  // console.log(location.state);


  // // BACKUP
  // useEffect(() => {
  //   Api.getMovieDetails(movieId).then(setMovieDetails)
  // }, [movieId])

  const {movieDetails} = useFetchApi(movieId, 'details');

  // useEffect(() => {//todo: DONE without useEffect??
  //   fetchPopular({movieId}, null,  'details');
  // }, [movieId])






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
          <img alt='poster' src={movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            : genericPoster}/>
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
        <LinkStyled to="cast" state={{ from: location.state?.from ?? "/"}}>
          <Button variant='outlined'>CAST</Button>
        </LinkStyled>
        <LinkStyled to="reviews" state={{ from: location.state?.from ?? "/"}}>
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
