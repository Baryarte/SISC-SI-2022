import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { getLocal } from "../../firebase/queries";
import "./Local.css";

function Local(props) {
  const [local, setLocal] = useState();
  const { localId } = useLocation().state;

  useEffect(() => {
    (async () => {
      const localData = await getLocal(localId);
      if (localData.exists()) {
        setLocal(localData.data());
      }
      console.count("localData");
    })();
  }, []);

  useEffect(() => {
    console.log(local && local.name);
  }, [local]);

  return (
    <div>
      <h1 className={"local-title"}>{local && local.name}</h1>
      <span className={"star"}>&#9733;</span>
      <figure>
        <img className={"local-image"} src={local && local.image} />
        <figcaption>Imagem do banco de dados</figcaption>
      </figure>
      <div className="local-adress">
        <h1 className="local-adress-header">Endereço:</h1>
        <p>{local.adress}</p>
      </div>
      <div className="local-cep">
        <h1 className="local-cep-header">CEP</h1>
        <p>{local.cep}</p>
      </div>
      <div className="local-contact">
        <h1 className="local-contact-header">Contato</h1>
        <p>{local.contact}</p>
      </div>
      <div className="local-description">
        <h1 className="local-description-header">Sobre:</h1>
        <p>{local.description}</p>
      </div>
      <div className={"footer-container"}>
        <Link className={"footer-button"} to={"/"}>
          Página Inicial
        </Link>
      </div>
    </div>
  );
}

export default Local;