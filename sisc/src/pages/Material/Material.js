import React, {useEffect, useState} from "react";
import {useLocation, useParams, Link} from "react-router-dom";
import {getMaterial, getMaterialRecipes} from "../../firebase/queries";

// import "./Material.css";

function Material(props) {
    const [material, setMaterial] = useState();
    const [recipes, setRecipes] = useState();
    const params = useParams();

    useEffect(() => {
        const materialId = params?.materialId.replaceAll("_", " ");
        if (materialId) {
            (async () => {
                const materialSnapshot = await getMaterial(materialId);
                let material = materialSnapshot.data();
                if (materialSnapshot.exists()) {
                    setMaterial(material);
                }
                let bdRecipes = await getMaterialRecipes(materialSnapshot);
                console.log("bdRecipes", bdRecipes, materialSnapshot.data());
                setRecipes(bdRecipes);

                console.count("materialData");
            })();
        }
    }, []);

    useEffect(() => {
        console.log(material && material.name);
    }, [material]);



    const name = material && material.name;
    const description = material && material.description;
    const image = material && material.image;
    const recipeList = material?.recipes && recipes && recipes.map(recipe => {
        const pathname = recipe.name.toLowerCase().replace(/ /g, "_");
        return <li><Link to={`/Recipes/${pathname}`}>{recipe.name}</Link></li>
    });



    return (
        <div>
            <h1 className={"material-tittle"}>{name}</h1>
            <span className={"star"}>&#9733;</span>
            <figure>
                <img className={"material-image"} src={image}/>
                <figcaption>Imagem que vem do banco de dados</figcaption>
            </figure>
            <div>
                <h1 className="material-descrption-tittle">Descrição</h1>
                <p className={"description"}>{description}</p>
            </div>

            <div>
                <h1 className={"material-recipes-header"}>Receitas:</h1>
                 <ul className={"material-recipes-list"} >{recipeList}</ul>
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