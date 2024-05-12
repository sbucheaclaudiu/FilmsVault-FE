import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import React from "react";
import Search from "./pages/search/Search";
import ToasterProvider from "./components/use/ToasterProvider";
import Playlist from "./pages/playlist/Playlist";
import Movie from "./pages/movie/Movie";
import Person from "./pages/person/Person";
import Account from "./pages/account/Account";

function App() {
  return (
    <div>
      <ToasterProvider/>
      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Login/>} />
              <Route path="/login" element= { <Login/>} />
              <Route path="/search" element= { <Search/>} />
              <Route path="/playlist/:id" element= { <Playlist /> } />
              <Route path="/movie/:id" element= { <Movie /> } />
              <Route path="/tvShow/:id" element= { <Movie /> } />
              <Route path="/person/:id" element= { <Person /> } />
              <Route path="/account/:id" element= { <Account /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;