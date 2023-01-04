import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import {Api} from "../services/fetchApi";
// import Grid from "@mui/material/Unstable_Grid2";
// import {MovieBox, MovieLink} from "../components/MoviesList/MoviesList.styled";
// import {Link} from "react-router-dom";
import {SearchedMovieLink} from "./movies.styled";
// import Input from '@mui/material/Input';
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";




export const Movies = () => {

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query  = searchParams.get('query') ?? '';
  const location = useLocation();


  // useEffect(() => {
  //   console.log(movies);
  // },[movies])

  const {register, resetField, handleSubmit} = useForm();//todo: validation
  // const {handleSubmit} = useForm();
  useEffect(() => {
    if (query) {
      Api.findOnQuery(query).then(setMovies);
    } else {
      setMovies([]);
      resetField("query");
    }
  }, [query, resetField])


  const onSubmit = ({query}) => {
    const queryUpdate = query !== '' ? {query} : {};
    console.log(query);
    setSearchParams(queryUpdate)
    Api.findOnQuery(query).then(setMovies);
  };

// todo: DONE 74та строка - перевірити можливість посилання без повного шляху (без /movies)
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
                }}>Search</Button>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        // border: '1px solid lightgrey',
        minWidth: '800px',
        marginTop: '15px',
      }}>
        {Array.isArray(movies) && movies.length > 0 &&
          <Box>
            {movies.map(({id, original_title, backdrop_path}) => (
              <Box key={id}>

                  <SearchedMovieLink to={`/movies/${id}`} state={{ from: location }}>
                    {original_title}
                  </SearchedMovieLink>

              </Box>
            ))}
          </Box>
        }
      </Box>
    </Box>
  )
}









