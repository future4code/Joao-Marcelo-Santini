import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router"
import styled from "styled-components";
import { getTrips } from "../actions/ListarViagens"
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
display:flex;
width: 100%;
height: 600px;
background-color: #3498DB;
background-image: linear-gradient(#6BFFBA, #206CE8);
margin-top: 50px;
justify-content: center;


`;

const DivViagens = styled.div`
display:block;
background-image: url("https://i.pinimg.com/originals/73/bd/f5/73bdf5f4d8dd96bf9ba009d9a41a94bc.jpg");
margin: 20px;
margin-top: 100px;
max-width: 250px;
height: 300px;
padding: 10px;
border-style: solid ;
border-width: 3px;
font-weight: bold;
color: white;
border-color:black;
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

export class Viagens extends Component {
  
    componentDidMount(dispatch) {
    this.props.getTrips()
  }

  render(){
    
    
    
    return(
      <MainDiv>
      <Header>
       
       <Logo src={futurex} />
         <LinkHeader onClick=  {this.props.goToLogin}>LOGIN</LinkHeader>
         <LinkHeader onClick= {this.props.goToInscricao}>INSCRIÇÃO</LinkHeader>
         <LinkHeader onClick=  {this.props.goToHome}>HOME</LinkHeader>
       </Header>
      
       <MainContent>
        {this.props.trips.map((trip)=>
         
         <DivViagens>
          <h3>{trip.name}</h3>
          <h4>{trip.planet}</h4>
          <p>{trip.description}</p>
          <p>Inicio: {trip.date}</p>
          <p>Duração: {trip.durationInDays} dias</p>
        </DivViagens>
         )}
         
       </MainContent>
     
       <FooterHome>
         FUTUREX Viagens
       </FooterHome>
   
   </MainDiv>

   );
 }
} 

const mapStateToProps = state => ({
  trips: state.trips.allTrips,
})


const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.login)),
    goToHome: () => dispatch(push(routes.home)),
    goToInscricao: () => dispatch(push(routes.inscricao)),
    getTrips: () => dispatch(getTrips())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Viagens);
