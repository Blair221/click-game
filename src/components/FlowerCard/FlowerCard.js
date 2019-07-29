import React from "react";
import "./style.css"

const FlowerCard = props => {
  return (
    <div className="card" onClick={() => props.handleCardClick(props.name)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlowerCard;
