import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router"
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { getTrips } from "../actions/ListarViagens"


const MainViagens = styled.div`
 
`;


export class Viagens extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }
    componentDidMount(dispatch) {
    this.props.getTrips()
  }

  render(){
    
    
    
    return(
      <MainViagens>
      <div>
        <h1> Viagens</h1>
        <button onClick= {this.props.goToLogin}>LOGIN/ADM</button>
        <button onClick= {this.props.goToInscricao}>Inscrição</button>
        <button onClick= {this.props.goToHome}>HOME</button>
      </div>
      <div>
        
        {this.props.trips.map((trip)=>
         <p>{trip.name}</p>
         )}
      
      </div>
    </MainViagens>


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
