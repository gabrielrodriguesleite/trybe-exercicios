import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data'

function App() {
  return (
    <>
      <h1 className="titulo">Pokedex</h1>
      <Pokedex pokemons={pokemons}/>
    </>
  );
}

export default App;
