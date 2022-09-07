import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {getRecipe} from "../../firebase/queries";
import "./Recipe.css";

function Recipe(props) {
    const [recipe, setRecipe] = useState();
    const [favorite, setFavorite] = useState();
    const {recipeId} = useLocation().state;


    useEffect(() => {
        (async () => {
            const recipeData = await getRecipe(recipeId);
            if (recipeData.exists()) {
                setRecipe(recipeData.data());
            }
            console.count("recipeData");
        })();
    }, []);

    useEffect(() => {
        console.log(recipe && recipe.name);
    }, [recipe]);

    const steps = recipe && recipe.steps.map(step => <li>{step}</li>);
    const ingredients = recipe && recipe.ingredients.map(ingredient => <li>{ingredient}</li>);
    const materials = recipe && recipe.materials.map(material => <li>{material}</li>);

    return (
        <div className={"recipe-page-container"}>
            <div className={"recipe-title-container"}>
                <h1 className={"recipe-title"}>{recipe && recipe.name}</h1>
                <span className={favorite ? "star on" : "star off"}>&#9733;</span>
            </div>
            <div className={"recipe-first-row"}>

                <figure className={"recipe-figure"}>
                    <img className={"recipe-image"} src={recipe && recipe.image}/>
                    <figcaption className={"recipe-figure-caption"}>Papel reciclado feito em casa</figcaption>
                </figure>
                <div>
                    <div>
                        <h2 className={"recipe-ingredients-header"}>Ingredientes:</h2>
                        <ul className={"recipe-ingredients-list"}>
                            {ingredients}
                        </ul>
                    </div>
                    <div>
                        <h2 className={"recipe-materials-header"}>Materiais:</h2>
                        <ul className={"recipe-materials-list"}>
                            {materials}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"recipe-steps-container"}>
                <p className={"recipe-steps-header"}>Passo a passo:</p>
                <ol className={"recipe-steps-list"}>
                    {steps}
                </ol>
            </div>

            <div>
                <p className={"recipe-source-header"}>Fonte:</p>
                <p className={"recipe-source"}>{recipe && recipe.sources}</p>

            </div>
        </div>
    );
}

export default Recipe;
