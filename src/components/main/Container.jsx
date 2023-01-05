import Container from '@mui/material/Container';
import PropTypes from "prop-types";


export const ContainerMui = (props) => {
  return <Container
    sx={{
      minHeight: '95vh',
      width: '100wh',
      padding: '0',
    }}
  >
    {props.children}
  </Container>
}

Container.propTypes = {
  children: PropTypes.object,
}
