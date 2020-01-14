import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const MainInscricao = styled.div`
 
`;




const Inscricao = props => {
    console.log(props);
    return (
      <MainInscricao>
        <div>
        <h1>Inscrição</h1>
        <button onClick= {props.goToLogin}>LOGIN/ADM</button>
        <button onClick= {props.goToViagens}>Viagens</button>
        <button onClick= {props.goToHome}>HOME</button>
        </div>
      </MainInscricao>
    );
  };

function mapDispatchToProps(dispatch) {
  return {
    goToHome: () => dispatch(push(routes.home)) ,
    goToLogin: () => dispatch(push(routes.login)),
    goToViagens: () => dispatch(push(routes.viagens)),
  };
}





export default connect(
  null,
  mapDispatchToProps
)(Inscricao);
