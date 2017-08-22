import React from 'react';

import Profile from "./profile"
import Stats from "./stats"
import Type from "./type"

class PokedexScreen extends React.Component{
  render(){
    const pokemon = this.props.pokemon;
    return (
      <div className="pokedex-container">
        <img className="pokemon-sprite" src={pokemon.sprite}></img>
        <Profile name={pokemon.name} health={pokemon.hp}/>
        <Stats
          attack={pokemon.attack} defence={pokemon.defence}
          speed={pokemon.speed} special={pokemon.special}
        />
        <Type/>
      </div>
    );
  }

}

export default PokedexScreen;
