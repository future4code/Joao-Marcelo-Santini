import React from 'react';
import styled from 'styled-components';


function EnviarTarefa(props) {
    return (
        <div className="EnviarTarefa">
            <ul><li>{props.texto}</li></ul>
        </div>
    );
}


export default EnviarTarefa