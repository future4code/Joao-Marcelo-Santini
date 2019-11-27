import React from 'react'
import './BigCard.css'


function Img(props){
    return (<img src={props.imagem} />)
}





function BigCard(props) {
    return (
        <div className="Container">
            
                <div className="aboutMe">
                    <h4>{props.subTitulo}</h4>
                    <div className="aboutMeEscrito"> <Img imagem={props.imagem} />
                        {props.texto}
                    </div>

                </div>
        </div>

    )
}

export default BigCard;