import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getTasks } from "../../actions"


export class TaskList extends Component {

    componentDidMount(dispatch){
        this.props.getTasks()
    }

render(){
   const {tasks} = this.props
    const filtroSegunda = tasks.filter((task) => {
        return task.day === "Segunda"
    })
    const filtroQuarta = tasks.filter((task) => {
        return task.day === "Quarta"
    })

    return(
        <Fragment>
            <div>
                {filtroSegunda.map((task)=> 
                    <p>{task.day} {task.text}</p>
                )}
            </div>
            <div>
                
            </div>
            <div>
                {filtroQuarta.map((task)=>
                <p>{task.day} {task.text}</p>
                )}
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Fragment>
    )
}
}


const mapStateToProps = state => ({
   tasks: state.tasks.allTasks,
})

const mapDispatchToProps = (dispatch) => ({
    getTasks: () => dispatch(getTasks())
    
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskList);