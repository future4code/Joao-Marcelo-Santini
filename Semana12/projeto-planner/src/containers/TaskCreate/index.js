import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import styled from "styled-components";
import { connect } from "react-redux";
import { createTask } from "../../actions"


const MainContent = styled.div`
  display:flex;
  justify-content: center;
`


const LoginWrapper = styled.form`
 display: flex;
 flex-direction: column;
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
  

  handleCreateTaskButton = () =>{
    this.props.createTask(this.state.text, this.state.day,)
  }
  handleSelectDay = event => {
    const {value} = event.target;
    this.setState ({day:value})
  }

  render() {
    const {text} = this.state;
    console.log(this.state)

    return (
  
      <MainContent>
        <LoginWrapper>
          <TextField
            onChange={this.handleFieldChange}
            name="text"
            type="text"
            label="Tarefa"
            value={text}
          />
          <select name="day" onChange={this.handleSelectDay} value={this.state.day}>
            <option value="" selected="selected">Escolha o dia</option>
            <option value="Segunda">Segunda-Feira</option>
	          <option value="Terça">Terça-Feira</option>
	          <option value="Quarta">Quarta-Feira</option>
            <option value="Quinta">Quinta-Feira</option>
            <option value="Sexta">Sexta-Feira</option>
            <option value="Sabado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
          <Button onClick={this.handleCreateTaskButton}>Cadastrar</Button>
      </LoginWrapper>
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