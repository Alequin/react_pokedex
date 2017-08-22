import React from 'react';
import makeGetRequest from "./../models/make_get_request";

class PokemonSelect extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      pokemonNumber: -1,
      pokemon: []
    }
    this.handleSelectPokemonChange = this.handleSelectPokemonChange.bind(this);
  }

  componentDidMount(){
    const request = new XMLHttpRequest();
    makeGetRequest(
      request,
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

  handleSelectPokemonChange(event){
    const pokemonNumber = event.target.value;
    console.log(pokemonNumber);
    this.setState({pokemonNumber: pokemonNumber});
    this.props.onSelectedPokemonChange(pokemonNumber);
  }

  render(){

    const pokemonOptions = this.state.pokemon.map((pokemon, index) => {
      return <option key={index} value={index+1}>{pokemon.name}</option>
    });

    return (
      <div value={this.state.pokemonNumber} className="pokemon-select-container">
        <select onChange={this.handleSelectPokemonChange}>
          <option value={-1} disabled>Select a Pokemon</option>
          {pokemonOptions}
        </select>
      </div>

    );
  }

}

export default PokemonSelect;
