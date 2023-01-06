// import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import {Api} from "../../services/fetchApi";
import Grid from "@mui/material/Unstable_Grid2";
import {Avatar} from "@mui/material";
import {CastItem, CastText} from "./Cast.styled";
import genericAvatar from '../../img/fakeAvatar2.png'
import {useFetchApi} from "../../services/useFetchApi";

const Cast = () => {
  const {movieId} = useParams();
  // const [movieCast, setMovieCast] = useState('')

  // useEffect(() => {
  //   Api.getMovieCast(movieId).then(setMovieCast)//todo: ?fetch error
  // }, [movieId])

  const {movieCast} = useFetchApi(movieId, 'cast');

  if (!movieCast) {
    return null
  }
  if (movieCast.length === 0) {
    return (
      <Typography component='h1'>
        THERE ARE NO CAST INFO FOR THIS FILM
      </Typography>
    )
  }

  //todo: responsive
  //todo: change to MuiCard
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>

        {movieCast.map(({id, name, profile_path, character}) => (

          <Grid xs={2} sm={4} md={4} key={id}>
            <CastItem>

              <Avatar sx={{width: 154, height: 231}}
                      alt="actor picture"
                      src={profile_path ? `https://image.tmdb.org/t/p/w154${profile_path}` : genericAvatar}
                      variant="rounded">
              </Avatar>

              <CastText>
                <Typography variant="body1">
                  {name}
                </Typography>
                <Typography variant="body3">
                  Character: {character}
                </Typography>
              </CastText>

          </CastItem>

          </Grid>
        ))}
      </Grid>
    </Box>

  );
}

export default Cast;
