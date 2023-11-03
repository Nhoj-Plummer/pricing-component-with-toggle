import React from "react"
import "./Card.css"

const Card = ({styles, title, price, storage, users, sendGB}) => {
  return (
    <div className="card-container" styles={styles}>
      <p>{title}</p>
      <h1>{price}</h1>
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
    </div>
  )
}

export default Card
