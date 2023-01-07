import {Routes, Route} from "react-router-dom";
import {ContainerMui} from "./main/Container";
import {Header} from "./Header/Header";
import {lazy, Suspense} from "react";
import {ToastContainer, Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Movies = lazy(() => import('../pages/Movies'));
const HomeMui = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));


export const App = () => {

  return (
    <>
      <Header/>
      <ContainerMui>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<HomeMui/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/movies/:movieId' element={<MovieDetails/>}>
              <Route path='cast' element={<Cast/>}/>
              <Route path='reviews' element={<Reviews/>}/>
            </Route>
          </Routes>
        </Suspense>
      </ContainerMui>

      <ToastContainer
        autoClose={2000}
        position="top-center"
        theme="light"
        transition={Zoom}
      />
    </>
  );
};


