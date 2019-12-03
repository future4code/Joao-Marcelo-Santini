import React from 'react';
import './App.css';
import styled from 'styled-components'
import EnviarTarefa from './components/EnviarTarefa/EnviarTarefa'



class App extends React.Component{
  constructor() {
    super()
    this.state = {
      texto: '',
      completa: false,
      listaTexto: []
    

    }
  }


  inputTexto = (e) => {
    this.setState ({
      texto: e.target.value
    })
  }


  adicionaItem = () => {
    const novoTexto = {
      texto: this.state.inputTexto,
    }
    const listaTextoCopia = [...this.state.listaTexto, novoTexto]
    this.setState({
      listaTexto: listaTextoCopia,
    })
  }


  render() {
    return(
      <div>
        <h1>Lista de tarefas</h1>
          <div> 
            <input type="text" onChange={this.inputTexto} value={this.state.texto} /> 
            <button onClick={this.adicionaItem} >Adicionar</button>
          </div>

         <br/>

        <div>
          <label>Filtro</label>
            <select>
              <option value="">Nenhum</option>
              <option value="pendentes">Pendentes</option>
              <option value="completas">Completas</option>
            </select>
        </div>
        
        <ul>
          
        </ul>
        

      </div>
    )
  }


}


export default App;
