import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import List from '@mui/material/List';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
// import Avatar from '@mui/material/Avatar';
// import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";





export const HomeMui = () => {
  return (
    <Box component='main'
      sx={{
      display: 'flex',
        flexDirection: 'column',
        padding: '10px',
    }}
    >
      <Typography component='h1' fontSize='24px' >
        Trending today
      </Typography>

      <Box >
      <List >
          <ListItem>
            <Link to={'test'} >Test Movie Name</Link>
          </ListItem>
        <ListItem>
          <Link to={'test'} >Test Movie Name</Link>
        </ListItem>
        <ListItem>
          <Link to={'test'} >Test Movie Name</Link>
        </ListItem>
      </List>
      </Box>

    </Box>
  )
}
