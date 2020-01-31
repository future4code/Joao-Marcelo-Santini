import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getTasks } from "../../actions"

const DivListaDia = styled.div`
  display:flex;
  justify-content: space-around;
  `;

const ConteudoDia = styled.div`
border: solid 3px;
padding:2px;
margin: 3px;
width: 250px;
`;




export class TaskList extends Component {

    componentDidMount(dispatch){
        this.props.getTasks()
    }

render(){
   const {tasks} = this.props
    const filtroSegunda = tasks.filter((task) => {
        return task.day === "Segunda"
    })
    const filtroTerca = tasks.filter((task) => {
        return task.day === "Terça"
    })
    const filtroQuarta = tasks.filter((task) => {
        return task.day === "Quarta"
    })
    const filtroQuinta = tasks.filter((task) => {
        return task.day === "Quinta"
    })
    const filtroSexta = tasks.filter((task) => {
        return task.day === "Sexta"
    })
    const filtroSabado = tasks.filter((task) => {
        return task.day === "Sabado"
    })
    const filtroDomingo = tasks.filter((task) => {
        return task.day === "Domingo"
    })





    return(
        <Fragment>
            <DivListaDia>
                <ConteudoDia>
                    <h3>Segunda-Feira</h3>
                    {filtroSegunda.map((task)=> 
                        <p>
                            {task.text}
                        </p>
                    )}
                </ConteudoDia>
                <ConteudoDia>
                    <h3>Terça-Feira</h3>
                    {filtroTerca.map((task)=>
                        <p>
                            {task.text}
                        </p>
                    )}
                </ConteudoDia>
                <ConteudoDia>
                    <h3>Quarta-Feira</h3>
                    {filtroQuarta.map((task)=>
                    <p>
                        {task.text}
                    </p>
                    )}
                </ConteudoDia>
                <ConteudoDia>
                    <h3>Quinta-Feira</h3>
                    {filtroQuinta.map((task)=> 
                        <p>
                            {task.text}
                        </p>
                    )}
                    </ConteudoDia>
                <ConteudoDia>
                    <h3>Sexta-Feira</h3>
                    {filtroSexta.map((task)=> 
                        <p>
                            {task.text}
                        </p>
                    )}
                </ConteudoDia>
                <ConteudoDia>
                    <h3>Sábado</h3>
                    {filtroSabado.map((task)=> 
                        <p>
                            {task.text}
                        </p>
                    )}
                </ConteudoDia>
                <ConteudoDia>
                    <h3>Domingo</h3>
                    {filtroDomingo.map((task)=> 
                        <p>
                            {task.text}
                        </p>
                    )}
                </ConteudoDia>
            </DivListaDia>
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