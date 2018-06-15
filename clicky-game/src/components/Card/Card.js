import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <img className="image" src={props.image} id={props.id} name={props.name} data-clicked="false" />
    </div>
);

export default Card;