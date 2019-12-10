import React from 'react';
import './App.css';
import axios from "axios";

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";
const token = "santini";





  class App extends React.Component{
    
    constructor(props){
      super(props);
      this.state = {
        cadastroNome:'',
        cadastroEmail:'',
        allUsers: [],

      }
    }
// ..................................Mostrar Cadastros.................................................................

    getAllUsers = () => {
      const url = `${baseUrl}/users/getAllUsers`;
     

     const request = axios.get(url,{
        headers: {
          "api-token" : token
        }
      });

      request.then((response) =>{
        const allUsers = response.data.result;
      console.log(response.data.result)
        this.setState({ allUsers: allUsers });
      });

      // request.then(response => {
      //   this.getAllUsers();
      // }); 
      // LOOP DOIDão

};



    // .......................................Controlar inputs, e cadastrar.............................................................
  
   onControleNome = (event) => {
     this.setState({  cadastroNome: event.target.value  })
   }

   onControleEmail = (event) => {
     this.setState({  cadastroEmail: event.target.value  })
   }

   cadastrarPessoa = () => {
     const url = `${baseUrl}/users/createUser`;
     
     const data = {
       name: this.state.cadastroNome,
       email: this.state.cadastroEmail
     }
     
     
     
    const request = axios.post(url, data,{
      headers: {
        "api-token" : token
      }
     })
     
     request
      .then((response) => {
         alert("Cadastrado")
     })
      .catch((error) => {
        alert("Erro");
    })

  };

//............................................Deletar Item...............................

  deleteItem = () => {
    const url = `${baseUrl}/users/deleteUser?id=string`;
    const request = axios.delete(url,{
      headers: {
        "api-token" : token
      }
    });
    
    request.then((response) =>{
      const deleteid = response.data.result.id;
    
      this.setState({ deleteid: deleteid });
    });
    
  }






  // ...................................................................................................
  
    render(){
      return(
        <div className="App">
        
        <button onClick={this.getAllUsers}>Lista de Cadastro</button>
          <div>
            <ul>
             {this.state.allUsers.map(users => (
             <li key={users.id}>{users.name}<button onClick={() => this.deleteItem(users.id)} >x</button></li>
             ))}
            </ul>

          </div>
        



        <h2>Cadastro</h2>


          <div>
            <input type="text" 
            onChange={this.onControleNome} 
            placeholder="Nome" 
            value={this.state.cadastroNome}
            />
            <br/>
            <input type="email" 
            onChange={this.onControleEmail} 
            placeholder="Email"
            value={this.state.cadastroEmail} 
            />
            <br/>
            <button onClick={this.cadastrarPessoa}> Cadastrar </button>
          </div>
        
        </div>


      );
    }
  }




  
export default App;
