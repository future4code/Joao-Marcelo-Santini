import React from "react";
import axios from "axios";

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api";

const UserListItem = props => {
  const handleOnClickDelete = () => {
    const url = `${baseURL}/users/deleteUser?id=${props.user.id}`;

    const axiosConfig = {
      headers: {
        "api-token": "santini"
      }
    };

    if(window.confirm("Deletar Cadastro?"))
    {
    axios.delete(url, axiosConfig).then(() => {
        props.onDeleteUser();
    });
    }
  };



  return (
      <li>
          {props.user.name}{" "}
          <button onClick={handleOnClickDelete}>X</button>

      </li>
  );

};


export default UserListItem;