import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const MainDiv = styled.div `
display:flex;
width: 100%;
flex-wrap: wrap;
`


const MainP = styled.p `
display:flex;
width: 500px;
padding: 10px;
border: solid 1px;
margin: 5px 5px 5px 5px;
`

const PokeBall = styled.img `
max-width: 30px;
`



const baseURL = "https://pokeapi.co/api/v2"

class PokeAPI extends Component {
    constructor(props){
        super(props);

        this.state = {
            allPokemons: [],
            selectedPokemonPhoto: '',
        }
    }

fetchAllPokemons = async () => {
    const response = await   axios.get(`${baseURL}/pokemon?limit=151`)
    this.setState({ allPokemons: response.data.results })
    console.log(this.allPokemons)
}





componentDidMount(){
    this.fetchAllPokemons();
}


render(){
    return(
       
        <MainDiv>
            
            
            {this.state.allPokemons.map((pokemon) => 
            (<MainP>
                <PokeBall value={pokemon.url} src={require('../img/pokeball.jpg')}/>    {pokemon.name}  
            </MainP>))}

        </MainDiv>
    )
}

    
}

export default PokeAPI;

