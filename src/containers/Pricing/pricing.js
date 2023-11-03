import React, {useState} from "react"
import {Card, Toggle} from "../../components/componentindex"
import "./Pricing.css"

const Pricing = () => {
  // State used to get the boolean from the Toggle component
  const [price, setPrice] = useState()

  return (
    <div className="pricing-container">
      <div className="pricing-container_text">
        <h1>Our Pricing</h1>
      </div>
      <div className="pricing-container_toggle">
        <p>Annually</p>
        <Toggle setPrice={setPrice} />
        <p>Monthly</p>
      </div>
      {price && (
        <div className="pricing-container_prices annually">
          <Card />
        </div>
      )}

      {!price && (
        <div className="pricing-container_prices mnothly">
          <Card />
        </div>
      )}
    </div>
  )
}

export default Pricing
