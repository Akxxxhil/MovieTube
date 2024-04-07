import React, { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Data from "./Data";
import {Routes,Route} from "react-router-dom"
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import DashBoard from "./Pages/DashBoard";
import About from "./Pages/About"
import Career from "./Pages/Career"
import Contact from "./Pages/Contact"

function App() {
  const [movies, setMovies] = useState(Data);

  function deleteRemover(id) {
    const newdata = movies.filter((movie) => movie.id !== id);
    setMovies(newdata);
  }
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/DashBoard" element={<DashBoard/>}/>
        <Route path="/Home" element={<div>
          <Cards movies={movies} deleteRemover={deleteRemover}></Cards>
        </div>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/MovieTube" element={<div>
          <Cards movies={movies} deleteRemover={deleteRemover}></Cards>
        </div>}/>
        <Route path="/" element={<div>
          <Cards movies={movies} deleteRemover={deleteRemover}></Cards>
        </div>}/>
        
      </Routes>
      
    </>
  );
}

export default App;
