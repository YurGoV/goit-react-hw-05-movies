import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import {Link} from "@mui/material";
import {StyledNavLink} from "./Header.styled";

export const MuiAppBar = () => {
  return (

      <AppBar  position="sticky" component='header' sx={{
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
      }} >

          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>

      </AppBar>

  )
}


// <StyledNavLink to="/goit-react-hw-05-movies">Home</StyledNavLink>
// <StyledNavLink to="/goit-react-hw-05-movies/movies">Movies</StyledNavLink>
