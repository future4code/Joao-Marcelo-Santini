import React from 'react'
import './SmallCard.css'


function ImgContato(props){
    return (<img src={props.imagem} />)
}



function SmallCard(props){
    return (
        <div className="Contato">
         <ImgContato imagem={props.imagem}/> <label><strong>{props.dados} </strong>{props.contato} </label>  
        </div>

    )
}




export default SmallCard;