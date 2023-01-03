import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
// import Box from "@mui/material/Box";


export const SearchedMovieLink = styled(NavLink)`
  display: flex;
  color: black;
  padding: 2px;
  //margin-left: 20px;
  min-width: 20px;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 4px;
  margin: 12px;

  :hover,
  :focus-visible {
    color: #1976d2;
    border-color: #1976d2;
    //border: 1px dotted white;

`;
