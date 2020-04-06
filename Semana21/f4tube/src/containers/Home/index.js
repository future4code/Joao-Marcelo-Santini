import React, { Component } from "react";
import styled from "styled-components";
import { routes } from "../Router";
import logo from "../../resources/logo.png";
import { connect } from "react-redux";
import { push } from "connected-react-router";


const MainDiv = styled.div`
    list-style: none;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
`;

const HeaderHome = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:20px;
    background-color: tomato;
    align-items: center;
`

const NavHome = styled.nav`
    display:flex;
`

const ListaNav = styled.li`

`

const A = styled.a`
    text-decoration:none;
    color:black;
    margin-left: 10px;
    padding: 10px;
`

const LogoHome = styled.img`
    width:100px;
`;

export class Home extends Component {



  render(){
        return(
         <MainDiv>
            <HeaderHome> 
                <LogoHome src={logo}/> 
                <NavHome>
                    <ListaNav>
                        <A href="/"> Login</A>
                        <A href="/"> Home</A>
                    </ListaNav>
                </NavHome>

            </HeaderHome>
            
         </MainDiv>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    // goToLogin: () => dispatch(push(routes.Login)),
    // goToFeed: () => dispatch(push(routes.Feed)),
})



export default connect(null, mapDispatchToProps)(Home);
