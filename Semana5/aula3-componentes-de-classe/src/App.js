import React from 'react';
import "./App.css" ;

import Postagem from "./components/postagem/postagem";


function App() {
  return (
    <div>
      <div className="containerApp">
        <Postagem titulo="Paisagem" imagem={require("./imgpost/paisagem01.jpg")}/>
      </div>
      <div className="containerApp">
      <Postagem titulo="Sol" imagem={require("./imgpost/paisagem01.jpg")}/>
      </div>


    </div>
  );
}

export default App;
