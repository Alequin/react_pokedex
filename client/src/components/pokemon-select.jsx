import React from 'react';
import makeGetRequest from "./../models/make_get_request";

class PokemonSelect extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      pokemon: []
    }
  }

  componentDidMount(){
    makeGetRequest(
      "http://pokeapi.co/api/v2/pokemon/?limit=151&offset=0",
      () => {
        if(request.status !== 200) return;

        const jsonString = request.responseText;
        const pokemon = JSON.parse(jsonString);
        this.setState({
          pokemon: pokemon.results,
        });
      }
    )
  }

  render(){


    const pokemonOptions = this.state.pokemon.map((pokemon, index) => {
      return <option key={index} value={index+1}>{pokemon.name}</option>
    });

    return (
      <div className="pokemon-select-container">
        <select>
          {pokemonOptions}
        </select>
      </div>

    );
  }

}

export default PokemonSelect;
