import React from 'react';
import ReactDOM from 'react-dom';

import Pokedex from "./containers/pokedex"

window.onload = function(){
  ReactDOM.render(
    <Pokedex/>,
    document.getElementById('app')
  );
}
