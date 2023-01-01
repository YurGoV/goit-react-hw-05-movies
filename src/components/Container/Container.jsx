// import {Container} from "@mui/material";
import Container from '@mui/material/Container';


export const ContainerMui = (props) => {
  return <Container
    maxWidth={'xl'}
    sx={{
      minHeight: '95vh',
      // paddingTop: '10px',
    }}
  >
    {props.children}
  </Container>
}
