import React from "react";
import Axios from "axios";

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";

const PlayListItem = (props) =>{
    const handleOnClickDelete  = () => {
    const url = `${baseURL}/playlists/deletePlaylist?playlistId=${props.playlist.id}`

    const axiosConfig = {
        headers: {
            "auth" : "santini"
        }
    };

    if(window.confirm("Deletar Playlist?"))
{
    Axios.delete(url, axiosConfig).then(() => {
        props.onDeletePlaylist();
    });
}

};



    return (
    
        <div>
            
              {props.playlist.name} <button onClick={handleOnClickDelete}>X</button>


             
        </div>
    );
}





export default PlayListItem;