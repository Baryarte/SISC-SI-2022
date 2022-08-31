import {db} from "./firebase/firebase-config";
import {setDoc, addDoc, doc, collection} from "firebase/firestore";
import logo from './logo.svg';
import './App.css';
import {getMaterial, getMaterials, getRecipe} from "./firebase/queries";

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=> getRecipe("papel reciclado1")}>Test db</button>
      </header>
    </div>
  );
}

export default App;
