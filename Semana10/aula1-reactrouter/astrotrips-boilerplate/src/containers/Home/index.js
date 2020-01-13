import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";



const Home = props => {
    console.log(props);
    return (
      <div>
        <div>Home</div>
        <button>Ir para sobre</button>
        <button>Voltar</button>
      </div>
    );
  };

export default Home;
