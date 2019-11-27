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
            imagem: imagem1,
            contadorComentario: 0,
            inputComentario: null,
            criarBotaoComentar: null
            
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




   comentarioInputContador = () => {
       this.setState({
        inputComentario: <textarea/>,
        criarBotaoComentar: <button onClick={this.enviarComentario}>Comentar</button>
       })
    }


enviarComentario = () => {
    const novoContadorDeComentario = this.state.contadorComentario + 1;
    this.setState({
        contadorComentario: novoContadorDeComentario,
        inputComentario:null,
        criarBotaoComentar:null

    })
}





render() {
    return <div className="containerPai">
        <div className="containerImagem">
            <h3>{this.props.titulo}</h3>
            <img className="imagemPostagem" src={this.props.imagem} />
        
        </div>
           
        <div className="likeComentario">
            
            <img className="coracao" src={this.state.imagem} onClick={this.aoDarLike} /> <label>{this.state.contador} </label>
           <div><br/> <img className="coment" src={require('../.././icones/comment_icon.svg')} onClick={this.comentarioInputContador} /> <label>{this.state.contadorComentario}</label> {this.state.inputComentario} 
           {this.state.criarBotaoComentar}
           </div>
        
        </div>
            
        
    </div>
}




}
export default Postagem