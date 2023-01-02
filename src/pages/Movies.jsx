import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
// import Input from '@mui/material/Input';


export const Movies = () => {

  const {register, handleSubmit} = useForm();//todo: validation
  // const {handleSubmit} = useForm();
  const onSubmit = data => console.log(data);


  return (
    <Box component='main'
         sx={{
           display: 'flex',
           flexDirection: 'column',
           padding: '10px',
         }}
    >

      <Box component='form'
           noValidate
           autoComplete="off"
           onSubmit={handleSubmit(onSubmit)}
           sx={{
             display: 'flex',
             height: '50px',
             alignItems: 'flex-end',
             // '& > :not(style)': {m: 1, width: '25ch'},
           }}
      >
        <TextField {...register("query")} label='search query' variant="standard" size="small"
        >
        </TextField>
        <Button type="submit" variant="outlined" size="small"
                sx={{
                  display: 'flex',
                  height: '25px',
                  width: '50px',
                  marginLeft: '20px',
                }} >Search</Button>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid lightgrey',
        minWidth: '800px',
        marginTop: '15px',
      }}>
        FILMS

      </Box>
    </Box>
  )
}
