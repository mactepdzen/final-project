import logo from './logo.svg';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Board from "./components/layout/Board";
import PokemonPage from "./components/pokemon-items/PokemonPage";
import CaughtPokemons from "./components/pokemon-items/CaughtPokemons";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Route exact path='/' component={Board} />
        <Route exact path='/pokemons/:id' component={PokemonPage} />
        <Route exact path='/caughtPokemons' component={CaughtPokemons} />
    </div>
  );
}

export default App;
