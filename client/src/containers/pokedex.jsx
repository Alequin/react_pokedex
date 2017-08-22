import React from 'react';

import PokemonSelect from "./../components/pokemon-select"

class Pokedex extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedPokemonIndex: -1
    }
    this.updatePokemon = this.updatePokemon.bind(this);
  }

  updatePokemon(index){
    this.setState({selectedPokemonIndex: index});
  }

  render(){
    return (
      <div>
        <PokemonSelect onSelectedPokemonChange={this.updatePokemon}/>
        <p>{this.state.selectedPokemonIndex}</p>
      </div>
    );
  }

}

export default Pokedex;
