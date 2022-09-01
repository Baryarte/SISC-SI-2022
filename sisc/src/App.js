import React from "react";
import "./App.css";
import Recomendation from "./components/Recomendation";
import Searchbar from './components/Searchbar';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Img_Papel from './images/papel-reciclado.jpg';
import Img_Garrafa from './images/vaso-garrafa-pet.jpg';
import Img_Pneu from './images/mesa-pneu.jpg';
import Img_Ls from './images/ls-reciclagem.jpeg';
import Img_3r from './images/3r-ambiental.jpeg';
import Img_Atlas from './images/atlas.jpg';

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={
          <div className="app">
            <div className="container">
              <h1 className="page-title">SISTEMA DE INFORMAÇÃO SOBRE RECICLAGEM</h1>
              <h1>Materiais</h1>
              <Searchbar />
              <h1>Mais pesquisados:</h1>
              <div >
                <nav className="reccontainer">
                  <Link to="1"><img className="rec" src={Img_Papel} alt="papel" /></Link>
                  <Link to="2"><img className="rec" src={Img_Garrafa} alt="garrafa" /></Link>
                  <Link to="3"><img className="rec" src={Img_Pneu} alt="pneu" /></Link>
                </nav>
              </div>

            </div>
          </div>} />
        <Route path="/Locais" element={<div className="app">
          <div className="container">
            <h1 className="page-title">SISTEMA DE INFORMAÇÃO SOBRE RECICLAGEM</h1>
            <h1>Locais</h1>
            <Searchbar />
            <h1>Mais pesquisados:</h1>
            <div className="reccontainer">
              <Link to="1"><img className="rec" src={Img_Ls} alt="ls" /></Link>
              <Link to="2"><img className="rec" src={Img_3r} alt="3r" /></Link>
              <Link to="3"><img className="rec" src={Img_Atlas} alt="Atlas" /></Link>
            </div>
          </div>
        </div>} />
        <Route path="/Favoritos" element={<h1>Favoritos</h1>} />
        <Route path="/1" element={<h1>1</h1>} />
        <Route path="/2" element={<h1>2</h1>} />
        <Route path="/3" element={<h1>3</h1>} />
        <Route path="/Locais/1" element={<h1>Local 1</h1>} />
        <Route path="/Locais/2" element={<h1>Local 2</h1>} />
        <Route path="/Locais/3" element={<h1>Local 3</h1>} />
      </Routes>
      <nav>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/Locais">Locais</Link></li>
        <li><Link to="/Favoritos">Favoritos</Link></li>

      </nav>
    </>

  );
};

export default App;


