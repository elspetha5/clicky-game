import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div id="jumbotron">
        <h1>Sofa Surfing!</h1>
        <h3>Click on a picture, but remember which one you picked...</h3>
        <h3>Game's over when you click a picture more than once.</h3>
        <h3 id="win">Or win. You could always win too.</h3>
    </div>
);

export default Jumbotron;