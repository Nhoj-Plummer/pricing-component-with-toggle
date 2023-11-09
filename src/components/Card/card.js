import React from "react";
import "./Card.css";

const Card = ({styles, title, price, storage, users, sendGB}) => {
  return (
    <div className="card-container" styles={styles}>
      <div className="card-container_text">
        <p>{title}</p>
        <h1>
          <span>$</span>
          {price}
        </h1>
      </div>

      <div className="card-container_rules">
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

      <div className="card-container-button">
        <button>LEARN MORE</button>
      </div>
    </div>
  );
};

export default Card;
