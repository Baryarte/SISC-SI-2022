import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { getMaterial } from "../../firebase/queries";
// import "./Material.css";

function Material(props) {
  const [material, setMaterial] = useState();
  const { materialId } = useLocation().state;

  useEffect(() => {
    (async () => {
      const materialData = await getMaterial(materialId);
      if (materialData.exists()) {
        setMaterial(materialData.data());
      }
      console.count("materialData");
    })();
  }, []);

  useEffect(() => {
    console.log(material && material.name);
  }, [material]);

  const name = material && material.name;
  const description = material && material.description;
  const image = material && material.image;
  const recipes = material && material.recipes.map(recipe => <li>{recipe}</li>);

  return (
    <div>
      <h1 className={"material-tittle"}>{name}</h1>
      <span className={"star"}>&#9733;</span>
      <figure>
        <img className={"material-image"} src={image} />
        <figcaption>Imagem que vem do banco de dados</figcaption>
      </figure>
      <h1 className={"description"}>{description}</h1>
      <div>
        <p className={"material-recipes-header"} >Receitas:</p>
        {/* <ul className={"material-recipes-list"} >{recipes}</ul> */}
      </div>

      <div className={"footer-container"}>
        <Link className={"footer-button"} to={"/"}>
          Página Inicial
        </Link>
      </div>
    </div>
  );
}


export default Material;