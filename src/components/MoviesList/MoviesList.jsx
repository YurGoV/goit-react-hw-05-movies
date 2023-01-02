import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";
// import List from "@mui/material/List";
import {Avatar, ListItemAvatar} from "@mui/material";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {experimentalStyled as styled} from '@mui/material/styles';
import {MovieBox, MovieLink} from "./MoviesList.styled";


// id, backdrop_path, original_title

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

export const MoviesList = ({movies}) => {

  console.log(movies);

  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>

        {movies.map(({id, original_title, backdrop_path}) => (

          <Grid xs={2} sm={4} md={4} key={id}>
            <Item >

              <Avatar sx={{ width: 88, height: 50 }}
                alt="film picture"
                src={`https://image.tmdb.org/t/p/w154/${backdrop_path}`}
                variant="rounded"
                />

              <MovieBox>
                <MovieLink to={`${id}`}>
                  {original_title}
                </MovieLink>
              </MovieBox>

            </Item>

          </Grid>
        ))}
      </Grid>
    </Box>
  )

}


/*
<List>

      {movies.map(({id, original_title, backdrop_path}) => (

        <ListItem key={id}>
          <ListItemAvatar>
            <Avatar
              alt="film picture"
              src={`https://image.tmdb.org/t/p/w154/${backdrop_path}`}
              variant="rounded"
            sx={{
              width: 88, height: 50
            }}/>
          </ListItemAvatar>
        <Link to={`${id}`}>{original_title}</Link>
        </ListItem>
        ))}
    </List>
    */

/*

backdrop_path horiz
poster_path vert


This should be used: https://image.tmdb.org/t/p/ {SIZE}
  Examples:
    https://image.tmdb.org/t/p/original/lSEr1nphZuCqXli3VziIgCI8Ivf.jpg
      https://image.tmdb.org/t/p/w500/lSEr1nphZuCqXli3VziIgCI8Ivf.jpg
        https://image.tmdb.org/t/p/w154/lSEr1nphZuCqXli3VziIgCI8Ivf.jpg
*/
