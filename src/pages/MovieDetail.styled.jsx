import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

export const LinkStyled = styled(NavLink)`
  display: flex;
  color: black;
  padding: 2px;
  //margin-left: 20px;
  width: 120px;
  text-decoration: none;
  //border: 2px solid white;
  //border-radius: 4px;
  margin: 5px;
  justify-content: center;

  :hover,
  :focus-visible {
    color: #1976d2;
    border-color: #1976d2;
    //border: 1px dotted white;

`;
