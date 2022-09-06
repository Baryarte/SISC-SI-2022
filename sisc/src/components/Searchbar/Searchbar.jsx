import React, {useState, useEffect} from "react";
import '../Searchbar/Searchbar.css';
import Searchbutton from "../Searchbutton";

const Searchbar = () => {
const [search, setSearch] = useState("");

useEffect(() => {
    console.log(search);
},[search])
  return (
    <div className="search-container">
      <input className="search-box" type="text" placeholder="Busque um material" onChange={event => setSearch(event.target.value)}/>
      <div>
        <Searchbutton >Pesquisar</Searchbutton>
      </div>
    </div>

  );
};

export default Searchbar;