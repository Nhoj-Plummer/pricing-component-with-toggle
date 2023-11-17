import React from "react";
import "./MiddleCard.css";

const MiddleCard = ({id, style, title, price, storage, users, sendGB, textColor, buttonStyle}) => {
  return (
    <div className="middle-card-container" id={id} style={style}>
      <div className="middle-card-container_text">
        <p>{title}</p>
        <h1>
          <span>$</span>
          {price}
        </h1>
      </div>

      <div className="middle-card-container_rules" style={textColor}>
        <ul>
          <li>
            <span>{storage}</span>
          </li>
          <li>
            <span>{users}</span>
          </li>
          <li>
            <span>{sendGB}</span>
          </li>
        </ul>
      </div>

      <div className="middle-card-container-button">
        <button style={buttonStyle}>
          <span>LEARN MORE</span>
        </button>
      </div>
    </div>
  );
};

export default MiddleCard;
