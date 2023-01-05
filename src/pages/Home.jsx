import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Api} from "../services/fetchApi";
import {MoviesList} from "../components/MoviesList/MoviesList";
import {Main} from "../components/main/Main";


const HomeMui = () => {

   const [movies, setMovies] = useState([])

  useEffect(() => {
    Api.findPopular().then(r => {
      setMovies(r);
    })
  }, [])


  return (
    <Main>
      <Typography component='h1' fontSize='24px'>
        Trending today
      </Typography>

      <Box>
        <MoviesList movies={movies} />
      </Box>

    </Main>
  )
}

export default HomeMui;



