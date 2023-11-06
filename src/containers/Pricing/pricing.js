import {React, useState} from "react";
import {Card, Toggle} from "../../components/componentindex";
import "./Pricing.css";

const Pricing = () => {
  // State used to get the boolean from the Toggle component
  const [price, setPrice] = useState();

  const annualData = [{title: "Basic", price: "$199.99", storage: "500 GB Storage", users: "2 Users Allowed", sendGB: "Send up to 3 GB"}];

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
      {!price && (
        <div className="pricing-container_prices annually">
          {annualData.map(option => {
            console.log("option", option);
            return <Card title={option.title} price={option.price} storage={option.storage} users={option.users} sendGB={option.sendGB} />;
          })}
          {/* <Card title="Annually" /> */}
        </div>
      )}

      {price && (
        <div className="pricing-container_prices mnothly">
          <Card title="Monthly" />
        </div>
      )}
    </div>
  );
};

export default Pricing;
