import React from "react";
import './App.css';
import UserSignup from "./components/UserSingup/index";
import UsersList from "./components/UserList/index";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "signup"
    };
  }

  handleChangePage = () => {
    if (this.state.currentPage === "signup") {
      this.setState({ currentPage: "list" });
    } else {
      this.setState({ currentPage: "signup" });
    }
  };

  render() {
    // Define o texto do botão baseado na
    // página em que nos encontramos no momento
    const buttonText =
      this.state.currentPage === "signup"
        ? "Ir para Lista"
        : "Ir para Cadastro";

    return (
      <div className="App">
        <button onClick={this.handleChangePage}>{buttonText}</button>

        {this.state.currentPage === "signup" ? <UserSignup /> : <UsersList />}
      </div>
    );
  }
}

export default App;
