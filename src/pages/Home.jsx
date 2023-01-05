import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Api} from "../services/fetchApi";
import {MoviesList} from "../components/MoviesList/MoviesList";
import {Main} from "../components/main/Main";
import {toast} from "react-toastify";


const HomeMui = () => {

   const [movies, setMovies] = useState([])

  useEffect(() => {
    Api.findPopular()
      .then((response) => {
        if (response.name === 'AxiosError' || !response) {//todo: refactoring
          return toast('Sorry, something is wrong  `:( ')
        } else {
          setMovies(response)
        }
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



