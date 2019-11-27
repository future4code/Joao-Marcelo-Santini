import React from 'react'
import './ImageButton.css'


function ImgBotao(props){
    return (<img src={props.imagem} />)
}



function ImageButton(props){
    return (
        <div className="Botao">
         <ImgBotao imagem={props.imagem}/> <label>{props.texto}</label>
        </div>

    )
}




export default ImageButton;