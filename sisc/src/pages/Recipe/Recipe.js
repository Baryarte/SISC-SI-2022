import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getRecipe } from "../../firebase/queries";

function Recipe(props) {
  const [recipe, setRecipe] = useState();
  const { recipeId } = useLocation().state;

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

  const steps =
    recipe && recipe.steps.split(".").map((step) => <li>{step.trim()}</li>);

  return (
    <div>
      <h1>{recipe && recipe.name}</h1>
      <ol>{steps}</ol>
      <p>aaaa</p>
    </div>
  );
}

export default Recipe;
