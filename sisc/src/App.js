import React from "react";
import "./App.css";
import {Link, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Locais} from "./pages/Locais";

const App = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Locais" element={<Locais/>}/>
                <Route path="/Favoritos" element={<h1>Favoritos</h1>}/>
                <Route path="/1" element={<h1>1</h1>}/>
                <Route path="/2" element={<h1>2</h1>}/>
                <Route path="/3" element={<h1>3</h1>}/>
                <Route path="/Locais/1" element={<h1>Local 1</h1>}/>
                <Route path="/Locais/2" element={<h1>Local 2</h1>}/>
                <Route path="/Locais/3" element={<h1>Local 3</h1>}/>
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


