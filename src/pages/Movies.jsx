import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";
import {toast} from "react-toastify";

import {useFetchApi} from "../services/useFetchApi";

import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {MoviesList} from "../components/MoviesList/MoviesList";
import {buttonStyles, formStyles} from "./movies.styled";
import {Main} from "../components/main/Main";

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const {register, resetField, handleSubmit} = useForm();//todo: validation

  const {movies} = useFetchApi(query, 'query');

  const onSubmit = ({query}) => {
    if (query && query.trim() !== '') {
      const queryToUpdate = query.trim();
      setSearchParams({query: queryToUpdate});
    } else {
      setSearchParams({});
      resetField("query");
      toast('please input, what you want to find')
    }
  };

  return (
    <Main>

      <Box component='form' noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}
           sx={formStyles}
      >
        <TextField {...register("query")} label='search query' variant="standard" size="small"
                   defaultValue={query ? query : null}
        >
        </TextField>
        <Button type="submit" variant="outlined" size="small"
                sx={buttonStyles}>
          Search
        </Button>
      </Box>
      <Box>
        <MoviesList movies={movies}/>
      </Box>

    </Main>
  );
};

export default Movies;








