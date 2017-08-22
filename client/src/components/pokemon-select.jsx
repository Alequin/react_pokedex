import React from 'react';

class PokemonSelect extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      pokemon: []
    }
  }

  componentDidMount(){
    const request = new XMLHttpRequest();
    request.addEventListener("load", () => {
        if(request.status !== 200) return;

        const jsonString = request.responseText;
        const pokemon = JSON.parse(jsonString);
        this.setState({
          pokemon: pokemon.results,
        });
      }
    )
    request.open("GET", "http://pokeapi.co/api/v2/pokemon/?limit=151&offset=0");
    request.send();
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
