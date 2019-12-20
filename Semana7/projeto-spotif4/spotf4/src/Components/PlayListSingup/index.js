import React from "react";
import axios from "axios";


const baseURL= "https://us-central1-spotif4.cloudfunctions.net/api";




class PlayListSingup extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: ""
        };
    }


    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }


    handleCreatePlayList = () => {
        const playListToBeCreated = {
            name: this.state.name,

        };

        const axiosConfig = {
            headers: {
                "auth" : "santini"
            }
        }

      const request =  axios.post(`${baseURL}/playlists/createPlaylist`,playListToBeCreated, axiosConfig)
      .then(() => {
        this.setState({ name: ""});
      });

      request
      .then((response) => {
         alert("Cadastrado")
     })
      .catch((error) => {
        alert("Erro");
    })

    };






render() {

    return(
        <div>
            <input placeholder="Nome PlayList"  onChange={this.handleNameChange} value={this.state.name}/>
            <button onClick={this.handleCreatePlayList} >Salvar</button>
        </div>
    )
}



}



export default PlayListSingup;