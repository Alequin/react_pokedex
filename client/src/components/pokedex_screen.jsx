import React from 'react';

import Profile from "./profile"
import Stats from "./stats"
import Type from "./type"

class PokedexScreen extends React.Component{
  render(){
    console.log("render");
    return (
      <div className="pokedex-container">
        <img className="pokemon-sprite" src={this.props.pokemon.sprite}></img>
        <Profile/>
        <Stats/>
        <Type/>
      </div>
    );
  }

}

export default PokedexScreen;
