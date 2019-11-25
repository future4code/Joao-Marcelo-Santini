import React from 'react';
import './App.css';

function App() {
  return (
<body>

<header class="header">

    <p>FutureTube</p>
    <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Buscar..." />
        <button class="txtBusca">Pesquisar</button>
    </div>


</header>


<div class="navi">
    <div class="sidebar">
        <ul>
            <li><a href="#"><i></i>Inicio</a></li>
            <li><a href="#"><i></i>Em Alta</a></li>
            <li><a href="#"><i></i>Inscrições</a></li>
            <li><a href="#"><i></i>Originais</a></li>
            <li><a href="#"><i></i>Biblioteca</a></li>
            <li><a href="#"><i></i>Histórico</a></li>
        </ul> 
</div>
</div>
<main>
    <h1>Videos</h1>


    <section class="container">

        <div>
            <a href="#"> <img src={require('./imgVideos/XUA.png')} /></a>
            <p>Cachoeira</p>
        </div>
        <div>
            <a href="#"> <img src={require('./imgVideos/ncs.jpg')} /></a>
            <p>NCS SONGs</p>
        </div>
        <div>
            <a href=""> <img src={require('./imgVideos/droneVideo.png')} /></a>
            <p>Drone</p>
        </div>

        <div>
            <a href=""> <img src={require('./imgVideos/cinematicDocumentary.png')} /></a>
            <p>Documentário</p>
        </div>
        <div>
            <a href="http://soter.ninja/videos/1.mp4"> <img src={require('./imgVideos/irlanda.png')} /></a>
            <p>Irlanda</p>
        </div>
        <div>
            <a href="http://soter.ninja/videos/7.mp4"> <img src={require('./imgVideos/escapo.png')} /></a>
            <p>Espaço</p>
        </div>
        <div>
            <a href="#"> <img src={require('./imgVideos/worl.jpg')} /></a>
            <p>Conflict</p>
        </div>
        <div>
            <a href="#"> <img src={require('./imgVideos/eye.jpg')} /></a>
            <p>Eye</p>
        </div>

    </section>
</main>

<footer>
    FutureTube
</footer>


</body>


  );
}

export default App;
