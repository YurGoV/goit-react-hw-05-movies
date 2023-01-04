import {Routes, Route} from "react-router-dom";
import {ContainerMui} from "./Container/Container";
import {MuiAppBar} from "./Header/Header";
// import {HomeMui} from "../pages/Home";
// import {Movies} from "../pages/Movies";
// import {Cast} from "./Cast/Cast";
import {lazy, Suspense} from "react";
// import {useState} from "react";

const Movies = lazy(() => import('../pages/Movies'));
const HomeMui = lazy(() => import('../pages/Home'));
const MovieDetails = lazy (() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));





export const App = () => {
// const [movies, setMovies] = useState([])

  return (
    <ContainerMui>
      <MuiAppBar/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<HomeMui/>}/>
        {/*<Suspense fallback={<div>Loading...</div>}>*/}
          <Route path='/movies' element={<Movies/>}/>
        {/*</Suspense>*/}
        <Route path='/movies/:movieId' element={<MovieDetails/>}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
      </Routes>
      </Suspense>
    </ContainerMui>
  );
};


