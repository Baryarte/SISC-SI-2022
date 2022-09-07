import Searchbar from "../components/Searchbar/Searchbar";
import { Link } from "react-router-dom";
import Img_Ls from "../images/ls-reciclagem.jpeg";
import Img_3r from "../images/3r-ambiental.jpeg";
import Img_Atlas from "../images/atlas.jpg";
import React from "react";

export function Locais() {
    return <div className="app">
        <div className="container">
            <h1 className="app-title">Sistema de informação sobre reciclagem</h1>
            <h1 className={"page-title"}>Locais</h1>
            <Searchbar />
            <h1>Mais pesquisados:</h1>
            <div className="reccontainer">
                <Link className={"reclink"} to={"ls"} state={{ localId: "ls" }}><img className="rec2" src={Img_Ls} alt="ls" /></Link>
                <Link className={"reclink"} to={"3r"} state={{ localId: "3r" }}><img className="rec2" src={Img_3r} alt="3r" /></Link>
                <Link to="3"><img className="rec2" src={Img_Atlas} alt="Atlas" /></Link>
            </div>
            <div className={"footer-container"}>
                <Link className={"footer-button"} to={"/"}>
                    Página Inicial
                </Link>
                <Link className={"footer-button"} to={"/Favoritos"}>
                    Favoritos
                </Link>
            </div>
        </div>
    </div>;
}