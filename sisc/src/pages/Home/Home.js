import Searchbar from "../../components/Searchbar/Searchbar";
import {Link, useNavigate} from "react-router-dom";
import Img_Papel from "../../images/papel-reciclado.jpg";
import Img_Garrafa from "../../images/vaso-garrafa-pet.jpg";
import Img_Pneu from "../../images/mesa-pneu.jpg";
import React, {useEffect, useState} from "react";
import {getMaterials} from "../../firebase/queries";

import "./Home.css";

function Home() {
    let navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const onSearch = async () =>{
        // const materials = await getMaterials();
        // const result = materials.filter(material => material.name.toLowerCase().includes(search.toLowerCase()) || material.type.toLowerCase().includes(search.toLowerCase()));
        // setSearchResult(result);
        await navigate("/search", {replace: false, state: {search}});
    }



    return <div className="app">
        <div className="container">
            <h1 className="app-title">Sistema de informação sobre reciclagem</h1>
            <h2 className={"page-title"}>Materiais</h2>
            <Searchbar search={search} setSearch={setSearch} onSearch={onSearch} />
            <p className={"most-searched-title"}>Mais pesquisados:</p>
            <div>
                <nav className="reccontainer">
                    <Link className={"reclink"} to={"/Recipes/papel_reciclado"} state={{ recipeId: "papel reciclado" }} ><img className="rec" src={Img_Papel} alt="papel" /></Link>
                    <Link className={"reclink"} to={"/Recipes/vaso_de_planta"} state={{ recipeId: "vaso de planta" }}><img className="rec" src={Img_Garrafa} alt="garrafa" /></Link>
                    <Link className={"reclink"} to={"/Recipes/mesa_de_pneu"} state={{ recipeId: "mesa de pneu" }}><img className="rec" src={Img_Pneu} alt="pneu" /></Link>
                </nav>
            </div>
            <div className={"footer-container"}>
                <Link className={"footer-button"} to={"/Locais"}>
                    Locais de Reciclagem
                </Link>
                <Link className={"footer-button"} to={"/Favoritos"}>
                    Favoritos
                </Link>
            </div>
        </div>
    </div>;
}

export { Home };