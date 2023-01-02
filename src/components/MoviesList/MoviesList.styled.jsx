import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import Box from "@mui/material/Box";


export const MovieLink = styled(NavLink)`
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
    //border-color: gray;
    //border: 1px dotted white;
`;

export const MovieBox = styled(Box)`
  display: flex;
  margin-left: 15px;
  text-align: left;
`;
/*

export const ItemStyled = styled(Item)1
;*/
