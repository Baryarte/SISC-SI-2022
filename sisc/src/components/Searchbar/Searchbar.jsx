import React, {useState, useEffect} from "react";
import '../Searchbar/Searchbar.css';
import Searchbutton from "../Searchbutton";

const Searchbar = ({search, setSearch, onSearch}) => {



  return (
    <div className="search-container">
      <input onKeyDown={e => e.key === 'Enter' && onSearch()} className="search-box" type="text" placeholder="Busque um material" value={search} onChange={event => setSearch(event.target.value)}/>
      <div>
        <Searchbutton onClick={onSearch}>Pesquisar</Searchbutton>
      </div>
    </div>

  );
};

export default Searchbar;