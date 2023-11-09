import {React, useState} from "react";
import {Card, Toggle} from "../../components/componentindex";
import "./Pricing.css";

const Pricing = () => {
  // State used to get the boolean from the Toggle component
  const [price, setPrice] = useState();

  const specialCardStyles = {backgroundColor: "var(--color-gradient"};

  const annualData = [
    {title: "Basic", price: "199.99", storage: "500 GB Storage", users: "2 Users Allowed", sendGB: "Send up to 3 GB"},
    {
      styles: {specialCardStyles},
      title: "Professional",
      price: "249.99",
      storage: "1 TB Storage",
      users: "5 Users Allowed",
      sendGB: "Send up to 10 GB"
    },
    {title: "Master", price: "399.99", storage: "2 TB Storage", users: "10 Users Allowed", sendGB: "Send up to 20 GB"}
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-container_text">
        <h1>Our Pricing</h1>
      </div>

      {/* Toggle Component Button Section */}
      <div className="pricing-container_toggle">
        <p>Annually</p>
        <Toggle setPrice={setPrice} />
        <p>Monthly</p>
      </div>

      {/* Annually Options Mapping/Conditioning */}
      {!price && (
        <div className="pricing-container_prices annually">
          {annualData.map(option => {
            console.log("option", option);
            return <Card styles={option.styles} title={option.title} price={option.price} storage={option.storage} users={option.users} sendGB={option.sendGB} />;
          })}
          {/* <Card title="Annually" /> */}
        </div>
      )}

      {/* Monthly Options Mapping/Conditioning */}
      {price && (
        <div className="pricing-container_prices mnothly">
          <Card title="Monthly" />
        </div>
      )}
    </div>
  );
};

export default Pricing;
