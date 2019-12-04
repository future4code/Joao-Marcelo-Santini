import React from 'react';
import styled from 'styled-components'
import TodoList from './TodoList/todoList';
import AddTodo from './AddTodo/addTodos';

const MainStyled = styled.div `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
`





class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: []
    };
  }


  render() {
    return(
      <MainStyled>
        <h1>Lista de Tarefas</h1>
        <AddTodo addTodoFn={this.addTodo} ></AddTodo>
        <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos} ></TodoList>
      </MainStyled>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos){
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else{
        console.log('no todos');
    }
  }

  addTodo = (todo) => {
      this.setState({ todos: [...this.state.todos,{
      text: todo,
      completed: false
    }]});
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
    console.log(localStorage.getItem('todos'));
}

updateTodo =  (todo) => {
 const newTodos = this.state.todos.map(_todo => {
    if(todo === _todo)
    return{
      text: todo.text,
      completed: !todo.completed
    }
    else
      return _todo
  });
  this.setState({todos: newTodos});
  localStorage.setItem('todos', JSON.stringify(this.state.todos));
}



}
export default App;
