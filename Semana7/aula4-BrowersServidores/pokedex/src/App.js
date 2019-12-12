import React from 'react';
import PokeAPI from './components/PokeAPI';

function App() {
  return (
    <div>
      <input placeholder="Filtro"></input> <hr/>
    <PokeAPI/>
    </div>
  );
}

export default App;
