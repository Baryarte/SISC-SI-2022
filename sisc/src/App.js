import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Locais } from "./pages/Locais";
import Recipe from "./pages/Recipe/Recipe";
import Material from "./pages/Material/Material";
import { getLocal } from "./firebase/queries";
import Local from "./pages/Local/Local";

const App = () => {
    console.log(getLocal("ls"));
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Locais" element={<Locais />} />
                <Route path="/Favoritos" element={<h1>Favoritos</h1>} />
                <Route path="/papel_reciclado" element={<Recipe />} />
                <Route path="/papel" element={<Material />} />
                <Route path="/3" element={<h1>3</h1>} />
                <Route path="/Locais/ls" element={<Local />} />
                <Route path="/Locais/3r" element={<Local />} />
                <Route path="/Locais/atlas" element={<Local />} />
            </Routes>
            {/*<nav>*/}

            {/*<li><Link to="/">Home</Link></li>*/}
            {/*<li><Link to="/Locais">Locais</Link></li>*/}
            {/*<li><Link to="/Favoritos">Favoritos</Link></li>*/}

            {/*</nav>*/}
        </>

    );
};

export default App;


