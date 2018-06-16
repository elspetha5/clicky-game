import React from "react";
import "./Nav.css";

const Nav = () => (
    <div className="nav">
        <span id="navTitle">Sofa Surfing!</span>
        <span id="guess">Click a couch to start</span>
        <span className="score">Score: <span id="score">0</span></span> 
        <span className="score" id="scoreLine">Top Score: <span id="topScore">0</span></span>
    </div>
);

export default Nav;