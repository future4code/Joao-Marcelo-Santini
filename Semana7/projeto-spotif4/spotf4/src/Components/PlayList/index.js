import React from "react";
import axios from "axios";
import PlayListItem from "../PlayListItem/index";

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPlaylists: [],
            playlistMusics: []
        };
    }


    componentDidMount(){
        this.getAllPlayList();
    }


    getAllPlayList =  () => {
        const axiosConfig = {
            headers: {
                "auth" : "santini"
            }
        };

       const getAllPlayListRequest =  axios.get(`${baseURL}/playlists/getAllPlaylists/`, axiosConfig);

       getAllPlayListRequest.then((response) => {
           this.setState({ allPlaylists : response.data.result.list });   
       });
    }




render() {
    return (
        <div>
            <h3>PlayList Cadastradas.</h3>
            {this.state.allPlaylists.map(playlist => (
              
              <PlayListItem playlist={playlist} onDeletePlaylist={this.getAllPlayList} />
              
            ))}

                <div>
                    <select>
                        <option>Detalhes Playlist</option>
                        {this.state.allPlaylists.map((playlist) => (<option>{playlist.name}</option>))}
                    </select>
                </div>

        </div>
    )
}




}

export default Playlist;