import React from "react";
import "./App.css";
import Searchbar from './components/Searchbar';

const App = () => {

    return (
        <div className="app">
            <div className="container">
                <h1 className="page-title">SISTEMA DE INFORMAÇÃO SOBRE RECICLAGEM</h1>
                <Searchbar/>

            </div>
        </div>
    );
};

export default App;
