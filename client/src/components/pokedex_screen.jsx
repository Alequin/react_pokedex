import React from 'react';

import Profile from "./profile"
import Stats from "./stats"

class PokedexScreen extends React.Component{

  render(){
    return (
      <div className="pokedex-container">
        <img className="pokemon-sprite" src="./1.png"></img>
        <Profile/>
        <Stats/>
      </div>
    );
  }

}

export default PokedexScreen;
