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
          pokemon: pokemon,
        });
      }
    )
    request.open("GET", "http://pokeapi.co/api/v2/pokemon/?limit=151&offset=0");
    request.send();
  }

  render(){


    const pokemonOptions = pokemonObject.results.map((pokemon) => {
      return <option></option>
    });

    return (
      <p>Hello</p>
    );
  }

}

export default PokemonSelect;
