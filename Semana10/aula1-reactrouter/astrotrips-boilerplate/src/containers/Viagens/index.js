import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router"
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const MainViagens = styled.div`
 
`;



const Viagens = props => {
    console.log(props);
    return (
      <MainViagens>
        <h1> Viagens</h1>
        <button onClick= {props.goToLogin}>LOGIN/ADM</button>
        <button onClick= {props.goToInscricao}>Inscrição</button>
        <button onClick= {props.goToHome}>HOME</button>
      </MainViagens>
    );
  };

function mapDispatchToProps(dispatch) {
  return {
      goToLogin: () => dispatch(push(routes.login)),
    goToHome: () => dispatch(push(routes.home)),
    goToInscricao: () => dispatch(push(routes.inscricao)),
  };
}





export default connect(
  null,
  mapDispatchToProps
)(Viagens);
