import React from "react";
import "./Nav.css";

const Nav = () => (
    <div className="nav">
        <span id="navTitle">Sofa Surfing</span>
        <span id="guess">you guessed</span>
        <span id="score">Score: <span className="score"></span> | Top Score: <span className="topScore"></span></span>
    </div>
);

export default Nav;