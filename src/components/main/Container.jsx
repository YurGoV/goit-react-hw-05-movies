import Container from '@mui/material/Container';


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
