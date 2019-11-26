import React from 'react';
import BigCard from './components/BigCard/BigCard';
import SmallCard from './components/SmallCard/SmallCard';
import ImageButton from './components/ImageButton/ImageButton'
import './App.css';
import { fbind } from 'q';

function App() {
  return (
    <div className="App">
      <h2>Dados Pessoais</h2>
      <BigCard subTitulo="João Marcelo Santini" imagem={require("./imagens/man.webp")} texto=" Oi eu sou o João Marcelo. Prazer em lhe conhecer. 
                        Desde pequeno sempre gostei de mexer com computadores,
                        esse gosto me acompanha até hoje. Comecei como Técnico de Informática, 
                        hoje estudo para me tornar um Desenvolvedor Full-stack. Sempre curioso e tentando evoluir para me." />

      <SmallCard imagem={require("./imagens/email.png")}  dados="Email:" contato="jmsantini@live.com" />
      <SmallCard imagem={require("./imagens/casa.png")} dados="Endereço:" contato="Rua das flores, n° 123"/>

      <a  href="#"><ImageButton imagem={require("./imagens/seta.png")} texto="Ver mais" /> </a>

      <h2>Experiências profissionais</h2>

      <BigCard subTitulo="ALT Informática" imagem={require("./imagens/alt.jpg")} texto="Suporte técnico, instalação e configuração de redes. E manutenção de impressoras, computadores e nootbooks." />
      <BigCard subTitulo="Santini Madeiras" imagem={require("./imagens/material.webp")} texto="Suporte geral de TI. Banco e cobranças." />

      <h2>Redes Sociais</h2>

     <a target="blank" href="https://www.facebook.com/joao.marcelo.18041"> <ImageButton imagem={require("./imagens/fb.png")} texto="FaceBook" /></a>

    </div>
  
  );
}

export default App;
