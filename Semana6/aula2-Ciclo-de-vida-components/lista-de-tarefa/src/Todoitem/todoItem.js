import React from 'react';
import styled from 'styled-components'
import './style.css';

const TodoStyle = styled.div `
  border: solid 1px ;
  padding: 5px;
`


class TodoItem extends React.Component{

    render() {
        
        const { todo } = this.props;
        
        return(
        
        <TodoStyle className={'todoItem' + (todo.completed ? ' completed' : '')} onClick={this.toggleTodo} ><ul><li>{todo.text}</li></ul></TodoStyle>
        
        );
    }

    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);
    }

}

export default TodoItem;