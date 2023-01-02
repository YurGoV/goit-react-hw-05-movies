import { Routes, Route } from "react-router-dom";
import {ContainerMui} from "./Container/Container";
import {MuiAppBar} from "./Header/Header";
import {HomeMui} from "../pages/Home";
import {Movies} from "../pages/Movies";


export const App = () => {
  return (
    <ContainerMui>
      <MuiAppBar />

      <Routes>
        <Route path='/' element={<HomeMui />} />
        <Route path='/movies' element={<Movies />}/>
      </Routes>
    </ContainerMui>
  );
};

// <Route index element={<div>ROOT PAGE</div>}


// <Route path='/goit-react-hw-05-movies' element={<div>ROOT</div>} />
// <Route path='/goit-react-hw-05-movies/movies' />
