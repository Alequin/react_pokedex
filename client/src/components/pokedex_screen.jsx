import React from 'react';

import Profile from "./profile"
import Stats from "./stats"
import Type from "./type"

class PokedexScreen extends React.Component{

  render(){
    return (
      <div className="pokedex-container">
        <img className="pokemon-sprite" src="./1.png"></img>
        <Profile/>
        <Stats/>
        <Type/>
      </div>
    );
  }

}

export default PokedexScreen;
