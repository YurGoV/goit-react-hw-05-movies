import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import {MoviesList} from "../components/MoviesList/MoviesList";
import {buttonStyles, formStyles} from "./movies.styled";
import {Main} from "../components/main/Main";
import {toast} from "react-toastify";
import {useFetchApi} from "../services/useFetchApi";

const Movies = () => {

  // const [movies, setMovies] = useState([]);////
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  console.log('query on movies Page ', query);

  const {register, resetField, handleSubmit} = useForm();//todo: validation
  // const {handleSubmit} = useForm();

  const {movies} = useFetchApi(query, 'query')


  /*useEffect(() => {
    if (query) {
      // Api.findOnQuery(query.trim())
      //   .then((response) => {
      //     if (response.name === 'AxiosError' || !response) {//todo: refactoring
      //       return toast('Sorry, something is wrong  `:( ')
      //     } else {
      //       setMovies(response)
      //     }
      //   })
    } else {
      // setMovies([]);
      resetField("query");
    }
  }, [query, resetField])*/


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
        <MoviesList movies={movies}/>
      </Box>

    </Main>
  )
}

export default Movies;








