import React, {useEffect, useState} from 'react';
import Searchbar from "../../components/Searchbar/Searchbar";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {getMaterials} from "../../firebase/queries";
import "./Search.css";

function Search(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [search, setSearch] = useState(location.state.search);
    const [result, setResult] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [nothingFound, setNothingFound] = useState(false);

    const onSearch = async () => {
        // await navigate("/search", {replace: false, state: {search}});
        const res = materials.filter(material => material.name.toLowerCase().includes(search.toLowerCase()) || material.type.toLowerCase().includes(search.toLowerCase()));
        console.log(res)
        if(res.length == 0){
            setNothingFound(true);
            setResult(materials);
            return
        }
        setNothingFound(false);
        setResult(res);
    }

    useEffect(() => {
        (async () => {
            const materials = await getMaterials();
            setMaterials(materials);
            const result = materials.filter(material => material.name.toLowerCase().includes(search.toLowerCase()) || material.type.toLowerCase().includes(search.toLowerCase()));
            setResult(result);
        })();

    }, [location]);
    const links = result.map(material => {
        const pathname = material.name.toLowerCase().replace(" ", "_");
        return <li className={"search-list-item"}><Link className={"search-list-link"} to={`/Materiais/${pathname}`}>{material.name}</Link></li>});
    return (
        <div className={"search-page-container"}>
            <h1 className={"search-page-title"}>Sistema de informação sobre reciclagem</h1>
            <Searchbar search={search} setSearch={setSearch} onSearch={onSearch}/>
            {nothingFound && <p className={"search-nothing-found"}>Nenhum resultado encontrado para a pesquisa. Veja outros resultados abaixo:</p>  }
            <ul className={"search-page-list"}>
                {links}
            </ul>

        </div>
    );
}

export default Search;