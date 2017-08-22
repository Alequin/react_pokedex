import React from 'react';

import PokemonSelect from "./../components/pokemon_select"
import PokedexScreen from "./../components/pokedex_screen"

class Pokedex extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedPokemonNumber: -1
    }
    this.updatePokemon = this.updatePokemon.bind(this);
  }

  updatePokemon(number){
    this.setState({selectedPokemonNumber: number});
  }

  render(){
    return (
      <div>
        <PokemonSelect onSelectedPokemonChange={this.updatePokemon}/>
        <PokedexScreen/>
      </div>
    );
  }

}

export default Pokedex;
