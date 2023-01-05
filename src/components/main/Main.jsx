import Box from "@mui/material/Box";


export const Main = (props) => {
  return (
    <Box component='main'
         sx={{
           display: 'flex',
           flexDirection: 'column',
           padding: '10px',
           // border: '1px solid red',
         }}
    >
      {props.children}
    </Box>
  )
}
