import {React, useState} from "react";
import {Card, Toggle} from "../../components/componentindex";
import "./Pricing.css";

const Pricing = () => {
  const [price, setPrice] = useState();
  // Data used for map function
  const annualData = [
    {id: "O1", title: "Basic", price: "199.99", storage: "500 GB Storage", users: "2 Users Allowed", sendGB: "Send up to 3 GB", textColor: {color: "var(--color-grayish-blue)"}},
    {
      id: "O2",
      style: {background: "var(--color-gradient)", color: "var( --color-very-light-grayish-blue)"},
      title: "Professional",
      price: "249.99",
      storage: "1 TB Storage",
      users: "5 Users Allowed",
      sendGB: "Send up to 10 GB"
    },
    {id: "O3", title: "Master", price: "399.99", storage: "2 TB Storage", users: "10 Users Allowed", sendGB: "Send up to 20 GB", textColor: {color: "var(--color-grayish-blue)"}}
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
          <Card id="O1" title="Basic" price="199.99" storage="500 GB Storage" users="2 Users Allowed" sendGB="Send up to 3 GB" />
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
