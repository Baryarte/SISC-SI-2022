import Searchbar from "../../components/Searchbar/Searchbar";
import {Link} from "react-router-dom";
import Img_Papel from "../../images/papel-reciclado.jpg";
import Img_Garrafa from "../../images/vaso-garrafa-pet.jpg";
import Img_Pneu from "../../images/mesa-pneu.jpg";
import React from "react";

import "./Home.css";

function Home() {
    return <div className="app">
        <div className="container">
            <h1 className="app-title">Sistema de informação sobre reciclagem</h1>
            <h2 className={"page-title"}>Materiais</h2>
            <Searchbar/>
            <p className={"most-searched-title"}>Mais pesquisados:</p>
            <div>
                <nav className="reccontainer">
                    <Link to="1"><img className="rec" src={Img_Papel} alt="papel"/></Link>
                    <Link to="2"><img className="rec" src={Img_Garrafa} alt="garrafa"/></Link>
                    <Link to="3"><img className="rec" src={Img_Pneu} alt="pneu"/></Link>
                </nav>
            </div>
            <div className={"footer-container"}>
                <Link  className={"footer-button"} to={"/Locais"}>
                    Locais de Reciclagem
                </Link>
                <Link className={"footer-button"} to={"/Favoritos"}>
                    Favoritos
                </Link>
            </div>
        </div>
    </div>;
}

export {Home};