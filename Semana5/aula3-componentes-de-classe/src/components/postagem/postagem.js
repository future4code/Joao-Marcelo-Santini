import React from "react";
import "./postagem.css";

const imagem1 = require('../.././icones/favorite-white.svg')
const imagem2 = require('../.././icones/favorite.svg')


class Postagem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeDado: false,
            contador: 0,
            imagem: imagem1
            
        }
    }


 

   aoDarLike = () => {
       if (this.state.likeDado) {
           this.setState({
               likeDado: false,
               contador: 0,
               imagem: imagem1
               
           })
       } else {
           this.setState ({
               likeDado: true,
               contador: 1,
               imagem: imagem2
              
           })
       }
   }



//    comentarioInputContador = () => {
//        if (this.state.likeDado){
//            return <input></input>;
//        } else {
//            return;
//        }
//    }





render() {
    return <div className="containerPai">
        <div className="containerImagem">
            <h3>{this.props.titulo}</h3>
            <img className="imagemPostagem" src={this.props.imagem} />
        
        </div>
           
        <div className="likeComentario">
            
            <img className="coracao" src={this.state.imagem} onClick={this.aoDarLike} /> <label>{this.state.contador} </label>
           <div><br/> <img className="coment" src={require('../.././icones/comment_icon.svg')} onClick={this.comentarioInputContador} /> <label>{this.state.contado}</label> <input></input> </div>
        
        </div>
            
        
    </div>
}




}
export default Postagem