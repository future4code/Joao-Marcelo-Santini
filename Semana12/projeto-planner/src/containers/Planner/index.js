import React from "react";
import TaskCreate from "../TaskCreate";
import TaskList from "../TaskList";
import { connect } from "react-redux";
import styled from "styled-components";

const Body = styled.div`
display:flex;
flex-direction: column;
`;

const Header = styled.div`
  background-color: violet;
  height: 100px;

  h3 {
    color: white;
    background: grey;
    display: flex;
    padding: 5px;
  }
`;

const Footer = styled.div`
  background-color: black;
  width: 100%;
  height: 75px;
  position:fixed;
  bottom:0;
`;

class Planner extends React.Component {
  render() {
    return <Body>
        <Header>
          <h3>Planner</h3>
        </Header>
          <TaskCreate/>
          <TaskList/>
        <Footer></Footer>
    </Body>
  }
}

export default connect()
(Planner);
