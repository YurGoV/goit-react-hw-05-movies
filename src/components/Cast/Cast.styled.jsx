// import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {experimentalStyled as styled} from '@mui/material/styles';



export const CastText = styled(Box)`
  display: flex;
  margin-left: 15px;
  text-align: left;
  flex-direction: column;
`;

export const CastItem = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  textAlign: 'left',
  height: 320,
  marginLeft: '15px',

}));

// export const CastItem = styled(Item)`
//   display: flex;
//   margin-left: 15px;
//   text-align: left;
//   flex-direction: column;
// `;
