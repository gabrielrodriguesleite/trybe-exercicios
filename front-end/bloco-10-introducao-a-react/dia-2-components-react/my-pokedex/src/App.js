import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data'

function App() {
  return <Pokedex className='pokedex' pokemons={pokemons}/>;
}

export default App;
