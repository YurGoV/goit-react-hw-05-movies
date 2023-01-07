import {useLocation} from "react-router-dom";
import {Avatar} from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {Item, MovieBox, NavLinkStyled} from "./MoviesList.styled";
import genericFilmPic from '../../img/film.jpg'
import PropTypes, {arrayOf} from "prop-types";


export const MoviesList = ({movies}) => {
  const location = useLocation();

  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>

        {movies.map(({id, original_title, backdrop_path}) => (
          <Grid xs={2} sm={4} md={4} key={id}>
            <Item>

              <Avatar sx={{width: 88, height: 50}}
                      alt="film picture"
                      src={backdrop_path ? `https://image.tmdb.org/t/p/w154/${backdrop_path}` : genericFilmPic}
                      variant="rounded"
              />

              <MovieBox>
                <NavLinkStyled to={`/movies/${id}`} state={{from: location}}>
                  {original_title}
                </NavLinkStyled>
              </MovieBox>

            </Item>
          </Grid>
        ))}

      </Grid>
    </Box>
  )
};

MoviesList.propTypes = {
  movies: arrayOf(PropTypes.object),
}


/*
This should be used: https://image.tmdb.org/t/p/ {SIZE}
  Examples:
    https://image.tmdb.org/t/p/original/lSEr1nphZuCqXli3VziIgCI8Ivf.jpg
      https://image.tmdb.org/t/p/w500/lSEr1nphZuCqXli3VziIgCI8Ivf.jpg
        https://image.tmdb.org/t/p/w154/lSEr1nphZuCqXli3VziIgCI8Ivf.jpg
*/
