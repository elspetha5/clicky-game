import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" id={props.background} onClick={() => props.cardClick(props.id)}>
        <img className="image" alt="couch" src={props.image} id={props.id} name={props.name} />
    </div>
);

export default Card;