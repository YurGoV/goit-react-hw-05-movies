import AppBar from '@mui/material/AppBar';
import {NavLinkStyled, AppBarStyles} from "./Header.styled";

export const Header = () => {
  return (
      <AppBar  position="sticky" component='header' sx={AppBarStyles} >

          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>

      </AppBar>
  )
}
