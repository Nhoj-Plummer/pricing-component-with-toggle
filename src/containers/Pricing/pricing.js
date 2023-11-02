import React, {useState} from "react"
import {Card, Toggle} from "../../components/componentindex"
import "./Pricing.css"

const Pricing = () => {
  const [price, setPrice] = useState(false)

  return (
    <div className="pricing-container">
      <div className="pricing-container_text">
        <h1>Our Pricing</h1>
      </div>
      <div className="pricing-container_toggle">
        <p>Annually</p>
        <Toggle />
        <p>Monthly</p>
      </div>
      <div className="pricing-container_prices">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Pricing
