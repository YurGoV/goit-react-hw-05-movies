import {useFetchApi} from "../services/useFetchApi";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {MoviesList} from "../components/MoviesList/MoviesList";
import {Main} from "../components/main/Main";


const HomeMui = () => {

  const {movies} = useFetchApi();

  if (!movies) {
    return null
  }

  return (
    <Main>
      <Typography component='h1' fontSize='24px'>
        Trending today
      </Typography>

      <Box>
        <MoviesList movies={movies}/>
      </Box>

    </Main>
  );
};

export default HomeMui;



