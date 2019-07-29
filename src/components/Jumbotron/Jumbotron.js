import React, { Component } from "react";
import "./style.css";
class Jumbotron extends Component {
  state = {};
  render() {
    return (
      <div className="container">
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to my Clicky Game</h1>
        <p className="lead">
          Click on the icons to start playing, but don't press the same one twice!
        </p>
        <hr className="my-4" />
      </div>
      </div>
    );
  }
}

export default Jumbotron;
