import React from 'react';

import makeGetRequest from "./../models/make_get_request";

import PokemonSelect from "./../components/pokemon_select"
import PokedexScreen from "./../components/pokedex_screen"

class Pokedex extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      pokemon: {
        sprite: "./pika_shadow.png",
        name: "N/A",
        hp: "0",
        attack: "0",
        defence: "0",
        speed: "0",
        special: "0",
        type: "N/A",
      }
    }
    this.updatePokemon = this.updatePokemon.bind(this);
  }

  updatePokemon(number){

    if(number <= 0) number = 1;
    console.log(number);
    const request = new XMLHttpRequest();
    makeGetRequest(
      request,
      `http://pokeapi.co/api/v2/pokemon/${number}`,
      () => {
        if(request.status !== 200) return;

        const jsonString = request.responseText;
        const pokemonObject = JSON.parse(jsonString);

        const pokemonSpecialStat = (pokemonObject.stats[1].base_stat + pokemonObject.stats[2].base_stat) / 2

        const pokemon = {
          sprite: pokemonObject.sprites.front_default,
          name: pokemonObject.forms[0].name,
          hp: pokemonObject.stats[5].base_stat,
          attack: pokemonObject.stats[4].base_stat,
          defence: pokemonObject.stats[3].base_stat,
          speed: pokemonObject.stats[0].base_stat,
          special: pokemonSpecialStat,
          type: pokemonObject.types[0].type.name
        }

        console.log(pokemon);
        this.setState({
          pokemon: pokemon,
        });
      }
    )
  }

  render(){
    return (
      <div>
        <PokemonSelect onSelectedPokemonChange={this.updatePokemon}/>
        <PokedexScreen pokemon={this.state.pokemon}/>
      </div>
    );
  }

}

export default Pokedex;
