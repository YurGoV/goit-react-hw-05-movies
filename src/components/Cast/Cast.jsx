import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Api} from "../../services/fetchApi";
import Grid from "@mui/material/Unstable_Grid2";
import {Avatar} from "@mui/material";
import Paper from '@mui/material/Paper';
import {experimentalStyled as styled} from '@mui/material/styles';
import {CastBox} from "./Cast.styled";

import genericAvatar from '../../img/fakeAvatar2.png'


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


const Cast = () => {
  const{ movieId } = useParams();

  console.log(useParams());

  const [movieCast, setMovieCast] = useState('')

  useEffect(() => {
    Api.getMovieCast(movieId).then(setMovieCast)
  }, [movieId])

  if (!movieCast) {
    return null
  }
  if (movieCast.length === 0) {
    return (
      <Typography>
        THERE ARE NO CAST INFO FOR THIS FILM
      </Typography>
    )
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>

        {movieCast.map(({id, name, profile_path, character}) => (

          <Grid xs={2} sm={4} md={4} key={id}>
            <Item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
              height: 320,
            }}>


              <Avatar sx={{ width: 154, height: 231 }}
                      alt="actor picture"
                      src={profile_path ? `https://image.tmdb.org/t/p/w154${profile_path}` : genericAvatar}
                      variant="rounded"
              >
              </Avatar>

              <CastBox
              sx={{
                flexDirection: 'column',
              }}>
                <Typography variant="body1">
                  {name}
                </Typography>
                <Typography variant="body3">
                  Character: {character}
                </Typography>
              </CastBox>



            </Item>

          </Grid>
        ))}
      </Grid>
    </Box>

  );
}

export default Cast;
