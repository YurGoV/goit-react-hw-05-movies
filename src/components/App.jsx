import {Routes, Route} from "react-router-dom";
import {ContainerMui} from "./Container/Container";
import {MuiAppBar} from "./Header/Header";
import {HomeMui} from "../pages/Home";
import {Movies} from "../pages/Movies";
import {MovieDetails} from "../pages/MovieDetails";
import {Reviews} from "./Reviews/Reviews";
import {Cast} from "./Cast/Cast";
// import {useState} from "react";


export const App = () => {
// const [movies, setMovies] = useState([])

  return (
    <ContainerMui>
      <MuiAppBar/>

      <Routes>
        <Route path='/' element={<HomeMui/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:movieId' element={<MovieDetails/>}>
          <Route path='cast' element={<Cast />}/>
          <Route path='reviews' element={<Reviews />}/>
        </Route>
      </Routes>
    </ContainerMui>
  );
};


