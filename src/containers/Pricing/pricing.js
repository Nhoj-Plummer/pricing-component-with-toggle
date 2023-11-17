import {React, useState} from "react";
import {Card, MiddleCard, Toggle} from "../../components/componentindex";
import "./Pricing.css";

const Pricing = () => {
  const [price, setPrice] = useState();

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
          <Card title="Basic" price="199.99" storage="500 GB Storage" users="2 Users Allowed" sendGB="Send up to 3 GB" />
          <MiddleCard title="Professional" price="249.99" storage="1 TB Storage" users="5 Users Allowed" sendGB="Send up to 10 GB" />
          <Card title="Master" price="399.99" storage="2 TB storage" users="10 Users Allowed" sendGB="Send up to 20 GB" />
        </div>
      )}

      {/* Monthly Options Mapping/Conditioning */}
      {price && (
        <div className="pricing-container_prices mnothly">
          <Card title="Basic" price="19.99" storage="500 GB Storage" users="2 Users Allowed" sendGB="Send up to 3 GB" />
          <MiddleCard title="Professional" price="24.99" storage="1 TB Storage" users="5 Users Allowed" sendGB="Send up to 10 GB" />
          <Card title="Master" price="39.99" storage="2 TB storage" users="10 Users Allowed" sendGB="Send up to 20 GB" />
        </div>
      )}
    </div>
  );
};

export default Pricing;
