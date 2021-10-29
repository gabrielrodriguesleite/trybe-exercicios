import React from 'react';
import './App.css';

class Pokemon extends React.Component {
  render() {
    return (
      <section id={this.props.pokemon.id} className="card">
        <h1>{this.props.pokemon.name}</h1>
        <p><em>({this.props.pokemon.type})</em>
        {this.props.pokemon.averageWeight.value}
        {this.props.pokemon.averageWeight.measurementUnit}</p>
        <div><img src={this.props.pokemon.image} alt="" /></div>
        <a rel='noreferrer' target='_blank' href={this.props.pokemon.moreInfo}>info</a>
      </section>
    );
  }
}

export default Pokemon;