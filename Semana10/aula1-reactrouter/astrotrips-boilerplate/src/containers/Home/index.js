import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router"
import TextField from "@material-ui/core/TextField";
import styled, { StyleSheetManager } from "styled-components";
import futurex from "../../img/futurex.png";



const MainDiv = styled.div`
display:flex;
flex-direction: column;
`;

const Header = styled.div`
display:flex;
background-color: white;
height: 100px;
width: 100%;
`;

const LinkHeader = styled.a`
align-self: center;
margin: 10px;
font-weight: bolder;
cursor: pointer;
`;

const Logo = styled.img`
width: 150px;
height: 100px;
`;


const MainContent = styled.div`
width: 100%;
height: 600px;
text-align: center;
align-self: center;
background-color: #3498DB;
background-image: linear-gradient(#6BFFBA, #206CE8);
margin-top: 50px;
`;
const FooterHome = styled.div`
text-align: center;
height: 50px;
width: 100%;
position: fixed;
bottom: 0px;
background-color: #206CE8;
color: white;
`;


const Home = props => {
    
    return (
      <MainDiv>
       <Header>
        <Logo src={futurex} />
        
          <LinkHeader onClick= {props.goToLogin}>LOGIN/ADM</LinkHeader>
          <LinkHeader onClick= {props.goToViagens}>Viagens</LinkHeader>
          <LinkHeader onClick= {props.goToInscricao}>Inscrição</LinkHeader>
        </Header>
        <MainContent>
        <h2>Viagens Espaciais</h2>
        <h2>Luais nas estrelas</h2>
        </MainContent>
      <FooterHome>
        FUTUREX Viagens
      </FooterHome>
      </MainDiv>
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
