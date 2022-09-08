import {
    addDoc,
    collection,
    getDoc,
    getDocs,
    where,
    query,
    doc,
    updateDoc,
} from "firebase/firestore";
import {db} from "./firebase-config";

// const testFirebase = async () => {
//     try {
//         const docRef = await addDoc(collection(db, "tests"), {
//             name: "test",
//         });
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// }

// Pega uma array de materiais pelo tipo do material
const getMaterials = async (material) => {
    const materialsRef = collection(db, "materials");

    const q = query(materialsRef, where("type", "==", material));

    const querySnapshot = await getDocs(q);

    console.log("querySnapshot");
    querySnapshot.forEach((doc) => console.log(doc.id, " => ", doc.data()));

    return querySnapshot;
};

// Pega um material pelo Id do material
const getMaterial = async (materialId) => {
    const materialRef = doc(db, "materials", materialId);

    const material = await getDoc(materialRef);

    console.log("material", material.data(), material.id);

    return material;
    // access the document data with the .data() method
};

// Pega um material pelo Id da receita
const getRecipe = async (recipeId) => {
    const recipeRef = doc(db, "recipes", recipeId);

    const recipe = await getDoc(recipeRef);

    console.log("recipe", recipe.data(), recipe.id);

    return recipe;
    // access the document data with the .data() method
};


// Material  - Ligar ou desligar favoritos
const setMaterialFavorite = async (materiald, value) => {
    const materialRef = doc(db, "materials", materiald);

    await updateDoc(materialRef, {
        favorite: value,
    });
}

// Recipe - Ligar ou desligar favoritos
const setRecipeFavorite = async (recipeId, value) => {
    const recipeRef = doc(db, "recipes", recipeId);

    await updateDoc(recipeRef, {
        favorite: value,
    });
}

// Location - Ligar ou desligar favoritos
const setLocationFavorite = async (locationId, value) => {
    const locationRef = doc(db, "locals", locationId);

    await updateDoc(locationRef, {
        favorite: value,
    });
}

// Pega um local pelo Id do local
const getLocal = async (localId) => {
  const localRef = doc(db, "locals", localId);

  const local = await getDoc(localRef);

  console.log("local", local.data(), local.id);

  return local;
  // access the document data with the .data() method
};

export {getLocal, getMaterial, getMaterials, getRecipe, setRecipeFavorite, setMaterialFavorite, setLocationFavorite};
