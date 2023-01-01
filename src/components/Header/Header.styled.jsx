import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";


export const StyledNavLink = styled(NavLink)`
  display: flex;
  color: white;
  padding: 2px 15px;
  margin-left: 20px;
  min-width: 20px;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 4px;

  &.active {
    color: darkblue;
  border: 1px solid darkblue;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    //color: darkcyan;
    //border-color: gray;
    border: 1px dotted white;

`
