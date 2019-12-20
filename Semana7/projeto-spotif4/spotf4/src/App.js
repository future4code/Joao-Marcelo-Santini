import React from 'react';
import './App.css';
import axios from "axios";
import PlayListSingup from "./Components/PlayListSingup/index"
import PlayList from "./Components/PlayList/index"


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "singup"


  };
}

handleChangePage = () => {
  if(this.state.currentPage === "singup" ){
    this.setState({ currentPage: "list" })
  } else {
    this.setState({ currentPage: "singup" })
  }
}




render() {

      const buttonText = this.state.currentPage === "singup" ? "Ir para PlayList" : "Ir para Cadastro"

  return (
    <div>
      <button onClick={this.handleChangePage} >{buttonText}</button>
      {this.state.currentPage === "singup" ? <PlayListSingup/> : <PlayList/> }
    </div>
  );
}

}

export default App;
