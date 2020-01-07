import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { createStore } from "redux";


const ButtonTeste = styled.button`

`


export const Layout = props => {
    return (
        <div>
            <h1>Lista de Tarefas</h1>
                <input placeholder="Adicione a tarefa"></input> <button>Enviar</button>
                <ul>
                    <li>Tarefa1<button>X</button></li>
                    <li>Tarefa2<button>X</button></li>
                </ul>
            <div>
                <ButtonTeste>Completas</ButtonTeste>
                <ButtonTeste>Incompletas</ButtonTeste>
                <ButtonTeste>Todas</ButtonTeste>
            </div>
        </div>
    );
}


