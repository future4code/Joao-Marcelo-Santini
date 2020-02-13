import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import styled from "styled-components";
import { connect } from "react-redux";
import { createTask } from "../../actions"


const MainContent = styled.div`
  display:flex;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 100px;
  `;


const FormTask = styled.form`
  display: flex;
  flex-direction: column;
  border: solid 2px;
  border-spacing: 20px;
  width:50vh;
  min-width: 250px;
`;

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: grey;
  padding-left: 5px;
  font-size: 14px;
  border: none;

  option {
    color: white;
    background: grey;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;




 export class TaskCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      day: "",
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
   
  };
  

  handleCreateTaskButton = (event) =>{
    event.preventDefault()
    this.props.createTask(this.state.text, this.state.day,)
  }
  handleSelectDay = event => {
    const {value} = event.target;
    this.setState ({day:value})
  }

  render() {
    const {text} = this.state;
   

    return (
  
      <MainContent>
        <FormTask onSubmit={this.handleCreateTaskButton}>
          <TextField
            onChange={this.handleFieldChange}
            name="text"
            type="text"
            label="Tarefa"
            value={text}
          />
          <br/>
          <Select name="day" onChange={this.handleSelectDay} value={this.state.day}>
            <option value="" selected="selected">Escolha o dia</option>
            <option value="Segunda">Segunda-Feira</option>
	          <option value="Terça">Terça-Feira</option>
	          <option value="Quarta">Quarta-Feira</option>
            <option value="Quinta">Quinta-Feira</option>
            <option value="Sexta">Sexta-Feira</option>
            <option value="Sabado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </Select>
          <br/>
          <Button type="submit" >Cadastrar</Button>
      </FormTask>
    </MainContent>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  createTask: (text, day ) => dispatch(createTask(text, day)),
})

export default connect(
  null,
  mapDispatchToProps
)(TaskCreate);