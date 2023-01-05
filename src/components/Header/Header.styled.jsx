import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";


export const NavLinkStyled = styled(NavLink)`
  display: flex;
  color: white;
  padding: 2px 15px;
  margin-left: 20px;
  min-width: 20px;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 4px;

  &.active {
    color: white;
  border: 2px solid white;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    border: 1px dotted white;
`;

export const AppBarStyles = {
  display: 'flex',
  flexDirection: 'row',
  padding: '10px',
}
