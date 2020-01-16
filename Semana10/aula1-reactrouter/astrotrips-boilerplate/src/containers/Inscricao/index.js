import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router"
import styled from "styled-components";
import futurex from "../../img/futurex.png";
import SelectCountry from "./select.js"




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


const loginForm = [
  {
    name: "name",
    type: "text",
    label: "Nome",
    required: true,
    pattern: "[A-Za-z]{3,}",
    errorMessage:"Minimo 3 letras"
    
  },

  {
    name: "age",
    type: "number",
    label: "Idade",
    required: true,
    minValue: 18,
  },

{
  name: "applicationText",
  type: "text",
  label: "Motivo",
  required: true,
  pattern: "[A-Za-z]{30,}"
},


{
    name: "profession",
    type: "text",
    label: "Profissão",
    required: true
  }
];



class Inscricao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      selectedCountry: "",
    }
  }

  handleInputChange = event => {
    
    const { name, value } = event.target;

    
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  handleOnSubmit = event => { 
    event.preventDefault();
    window.alert("Incrição feita com sucesso")
    
    console.log(this.state);
  };

  handleSelectedCountry = event => {
    const {value} = event.target;
    this.setState ({ selectedCountry:value });
  }

  render(){
    return(
      <MainDiv>
       <Header>
        
        <Logo src={futurex} />
          <LinkHeader onClick=  {this.props.goToLogin}>LOGIN/ADM</LinkHeader>
          <LinkHeader onClick= {this.props.goToViagens}>Viagens</LinkHeader>
          <LinkHeader onClick=  {this.props.goToHome}>HOME</LinkHeader>
        </Header>
        
        <MainContent>

          <h2>Formulário</h2>

        <form onSubmit={this.handleOnSubmit}>
          {loginForm.map(input => (
          <div key={input.name}>
            <label htmlFor={input.name}>{input.label}: </label>
            <input
              id={input.name}
              name={input.name}
              type={input.type}
              value={this.state.form[input.name] || ""}
              required={input.required}
              onChange={this.handleInputChange}
              pattern={input.pattern}
              min={input.minValue}
              title={input.errorMessage}
            />
          </div>
          ))}
           <SelectCountry  value = {this.state.selectedCountry} onChange ={this.handleSelectedCountry} />

           <button type="submit">Enviar</button>
        </form>
         
        </MainContent>
      
        <FooterHome>
          FUTUREX Viagens
        </FooterHome>
    
    </MainDiv>

    );
  }
} 

    
 
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
