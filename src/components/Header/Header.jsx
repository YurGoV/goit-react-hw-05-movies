import AppBar from '@mui/material/AppBar';
import {NavLinkStyled, AppBarStyles, buttonsPositionStyled} from "./Header.styled";
import Box from "@mui/material/Box";

export const Header = () => {
  return (
      <AppBar  position="sticky" component='header' sx={AppBarStyles} >
          <Box sx={buttonsPositionStyled}>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </Box>

      </AppBar>
  )
}
