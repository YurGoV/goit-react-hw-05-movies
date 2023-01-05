import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import {Api} from "../services/fetchApi";
import { useSearchParams } from "react-router-dom";
import {MoviesList} from "../components/MoviesList/MoviesList";
import {buttonStyles, formStyles} from "./movies.styled";
import {Main} from "../components/main/Main";

//todo: toastie

const Movies = () => {

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query  = searchParams.get('query') ?? '';

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
    const queryUpdate = query && query !== '' && query.trim() !== '' ? {query} : {};
    setSearchParams(queryUpdate)
    if (query && query.trim() !== '') {
      Api.findOnQuery(query.trim()).then(setMovies);
    } else {
      // console.log('empty query')
      // todo: toastify
    }
  };

  return (
    <Main>

      <Box component='form'
           noValidate
           autoComplete="off"
           onSubmit={handleSubmit(onSubmit)}
           sx={formStyles}
      >
        <TextField {...register("query")} label='search query' variant="standard" size="small"
                                          defaultValue={query ? query : null}
        >
        </TextField>
        <Button type="submit" variant="outlined" size="small" sx={buttonStyles}>
          Search
        </Button>
      </Box>

        <Box>
          <MoviesList movies={movies} />
        </Box>

    </Main>
  )
}
//todo: <ToastContainer ....
/*<ToastContainer
  autoClose={2000}
  position="top-center"
  theme="light"
  transition={Zoom}
/>*/

export default Movies;








