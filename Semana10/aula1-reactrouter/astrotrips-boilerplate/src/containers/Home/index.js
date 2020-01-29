import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router"
import styled, { StyleSheetManager } from "styled-components";
import futurex from "../../img/futurex.png";
import beer from "../../img/beer.jpg"



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

const SpaceBeer = styled.img`
margin-left: 20px;
max-width: 500px;
max-height:500px;
border-style: solid;
border-width: 5px;
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
          <LinkHeader onClick= {props.goToLogin}>LOGIN</LinkHeader>
          <LinkHeader onClick= {props.goToViagens}>VIAGENS</LinkHeader>
          <LinkHeader onClick= {props.goToInscricao}>INSCRIÇÃO</LinkHeader>
        </Header>
        <MainContent>
          <h2>Futurex Viagens</h2>
          <p>Venha viajar com a gente </p>
          
        <SpaceBeer src={beer} />
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
