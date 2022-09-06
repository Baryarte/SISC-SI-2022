import React from "react";
import "./Card.css";


const Card = (props) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt={props.title}/>
            </div>
            <div className="card-content">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
}