import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {getRecipe} from "../../firebase/queries";

function Recipe(props) {
    const [recipe, setRecipe] = useState();
    const {recipeId} = useLocation().state;
    console.log(props)
    console.log("recipeId", recipeId)
    useEffect(() => {
        (async () => {
            const recipeData = await getRecipe(recipeId);
            setRecipe(recipeData);
            console.count("recipeData");
        })();
    }, [])

    return (
        <h1></h1>
    );
}

export default Recipe;