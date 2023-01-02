import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// import List from '@mui/material/List';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItem from '@mui/material/ListItem';
// import Avatar from '@mui/material/Avatar';
// import ListItemText from '@mui/material/ListItemText';
// import {Link} from "react-router-dom";
import {Api} from "../services/fetchApi";
// import {Movies} from "./Movies";
import {MoviesList} from "../components/MoviesList/MoviesList";
import {useEffect, useState} from "react";


//todo: NavLink

export const HomeMui = () => {

   const [movies, setMovies] = useState([])

  useEffect(() => {
    Api.findPopular().then(r => {
      setMovies(r);
    })
  }, [])


  return (
    <Box component='main'
         sx={{
           display: 'flex',
           flexDirection: 'column',
           padding: '10px',
         }}
    >
      <Typography component='h1' fontSize='24px'>
        Trending today
      </Typography>

      <Box>
        <MoviesList movies={movies} />
      </Box>

    </Box>
  )
}



