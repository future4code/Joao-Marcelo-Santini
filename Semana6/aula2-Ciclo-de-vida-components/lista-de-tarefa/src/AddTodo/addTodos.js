import React from 'react';

class AddTodo extends React.Component{

    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    render() {
        return(
            <div className='addTodoContainer'>
               <form onSubmit={(e) => this.subimitTodo(e)}>
                   <input id='addTodoInput' onChange={(e) => this.updateInput(e)} type='text'></input>
                   <button type='submit'>Adicionar Tarefa</button>
               </form>
                <button onClick={this.resetStorage} >Resetar</button>
            </div>
        );
    }

    updateInput = (e) => {
        this.setState({todo: e.target.value});
    }
    subimitTodo = (e) => {
        e.preventDefault();
        this.props.addTodoFn(this.state.todo)
        document.getElementById('addTodoInput').value = '';
    }

    resetStorage = () => {
        window.localStorage.clear();
        window.location.reload();
    }

}


export default AddTodo;