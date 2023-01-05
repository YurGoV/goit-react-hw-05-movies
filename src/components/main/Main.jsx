import Box from "@mui/material/Box";
import PropTypes from "prop-types";


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

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}
