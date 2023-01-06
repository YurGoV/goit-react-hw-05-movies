import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {MoviesList} from "../components/MoviesList/MoviesList";
import {Main} from "../components/main/Main";
import {useFetchApi} from "../services/useFetchApi";
// import {useEffect, useState} from "react";
// import {Api} from "../services/fetchApi";
// import {toast} from "react-toastify";





const HomeMui = () => {
  // // BACKUP:
  //  const [movies, setMovies] = useState([])
  //
  // useEffect(() => {
  //   Api.findPopular()
  //     .then((response) => {
  //       if (response.name === 'AxiosError' || !response) {//todo: refactoring in useFetchApi
  //         return toast('Sorry, something is wrong  `:( ')
  //       } else {
  //         setMovies(response)
  //       }
  //     })
  // }, [])

  const {movies} = useFetchApi();//todo: toastie in useFetchApi

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



