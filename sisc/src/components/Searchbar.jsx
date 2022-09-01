import React from "react";
import './Searchbar.css';
import Searchbutton from "./Searchbutton";

const Searchbar = () => {
  return (
    <div className="search-container">
      <input className="search-box" type="text"></input>
      <div>
        <Searchbutton >Pesquisar</Searchbutton>
      </div>
    </div>

  );
};

export default Searchbar;