import {NavLink} from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {experimentalStyled as styled} from '@mui/material/styles';



export const NavLinkStyled = styled(NavLink)`
  display: flex;
  color: black;
  padding: 2px 15px;
  margin-left: 20px;
  min-width: 20px;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 4px;

  :hover,
  :focus-visible {
    color: darkcyan;
`;

export const MovieBox = styled(Box)`
  display: flex;
  margin-left: 15px;
  text-align: left;
`;

export const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));
