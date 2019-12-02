import React from 'react';
import './App.css';
import PrimeiraEtapa from './components/Etapas/PrimeiraEtapa';
import { truncateSync } from 'fs';
import ReactDOM from "react-dom"
import SegundaEtapa from './components/Etapas/SegundaEtapa';
import TerceiraEtapa from './components/Etapas/TerceiraEtapa';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      tela: "PrimeiraEtapa"
    };
  }

  onClickPrimeiraEtapa = () => {
    this.setState({tela: "SegundaEtapa"})
  }
 
  onClickSegundaEtapa = () => {
    this.setState({tela: "TerceiraEtapa"})
  }

  onClickEnviar = () => {
    this.setState({tela: "fim"})
  }


  render() {
    
    let tela;
      switch (this.state.tela){
        
      case "PrimeiraEtapa":
          tela = (
          <div>
          <PrimeiraEtapa/>
          <button onClick={this.onClickPrimeiraEtapa}>Segunda etapa</button>
        </div>
      );
      break;
  
      case "SegundaEtapa":
          tela = (
            
            <div>
              <SegundaEtapa/>
              <button onClick={this.onClickSegundaEtapa}>Terceira etapa</button>
            </div>
          );
          break;


      case "TerceiraEtapa":
          tela = (
            <div>
            <TerceiraEtapa/>
            <button onClick={this.onClickEnviar}>Enviar</button>
            </div>
          );
          break;
          
      case "fim":
          tela = (
            <div className="App">
              <h2>Cadastro Finalizado</h2>
            </div>
           
          );
          break;
}
  
    return (
      <div>
        {tela}
      </div>
    
    );
  
  }
}


export default App;