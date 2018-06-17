import React from "react";
import "./Nav.css";

const Nav = props => (
    <div className="nav">
        <span id="navTitle">Sofa Surfing!</span>
        <span id="guess">{props.instruction}</span>
        <span className="score">Score: <span id="score">{props.count}</span></span> 
        <span className="score" id="scoreLine">Top Score: <span id="topScore">{props.topScore}</span></span>
    </div>
);

export default Nav;