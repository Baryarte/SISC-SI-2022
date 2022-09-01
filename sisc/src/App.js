import React from "react";
import "./App.css";
import Recomendation from "./components/Recomendation";
import Searchbar from './components/Searchbar';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

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
            </div>
          </div>} />
        <Route path="/Locais" element={<div className="app">
          <div className="container">
            <h1 className="page-title">SISTEMA DE INFORMAÇÃO SOBRE RECICLAGEM</h1>
            <h1>Locais</h1>
            <Searchbar />
          </div>
        </div>} />
        <Route path="/Favoritos" element={<h1>Favoritos</h1>} />
      </Routes>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Locais">Locais</Link></li>
          <li><Link to="/Favoritos">Favoritos</Link></li>
        </ul>
      </nav>
    </>

  );
};

export default App;


