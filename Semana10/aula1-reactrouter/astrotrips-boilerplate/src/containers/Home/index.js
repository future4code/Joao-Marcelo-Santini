import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router"
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const MainHome = styled.div`
 
`;



const Home = props => {
    console.log(props);
    return (
      <MainHome>
        <h1> HOME PAGE</h1>
        <button onClick= {props.goToLogin}>LOGIN/ADM</button>
        <button onClick= {props.goToViagens}>Viagens</button>
        <button onClick= {props.goToInscricao}>Inscrição</button>
      </MainHome>
    );
  };

function mapDispatchToProps(dispatch) {
  return {
    goToLogin: () => dispatch(push(routes.login)),
    goToViagens: () => dispatch(push(routes.viagens)),
    goToInscricao: () => dispatch(push(routes.inscricao)),
  };
}





export default connect(
  null,
  mapDispatchToProps
)(Home);
