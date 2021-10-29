import React from 'react';
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render() {
    return <div>{this.props.pokemons.map((p) => <Pokemon id={p.id} pokemon={p}/>)}</div>;
    // return <>{this.props.pokemons.map((p) => console.log(p))}</>;
  }
}

export default Pokedex;