import React, {Component} from "react";
import "../Nav/style.css";

class Nav extends Component {
  state = {
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-success">
        <a className="navbar-brand" href="/">
          Click-Game
        </a>
        <span><h5>{this.props.message}</h5></span>
        <div className="scorecard">
          <h4>Score: {this.props.score} | High Score: {this.props.highScore}</h4>
        </div>
      </nav>
    );
  }
}

export default Nav;
