import {React, useState, useEffect} from "react";
import {Card, Toggle} from "../../components/componentindex";
import "./Pricing.css";

const Pricing = () => {
  //State used to get the width and height of the screen
  function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
      width,
      height
    };
  }

  // Funciton used to gain the height and width of the screen for conditional styling or actions
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const {width} = useWindowDimensions();

  // State used to get the boolean from the Toggle component
  const [price, setPrice] = useState();

  // Data used for map function
  const annualData = [
    {id: "O1", title: "Basic", price: "199.99", storage: "500 GB Storage", users: "2 Users Allowed", sendGB: "Send up to 3 GB", textColor: {color: "var(--color-grayish-blue)"}, defaultBack: "red"},
    {
      id: "O2",
      style: {background: "var(--color-gradient)", color: "var( --color-very-light-grayish-blue)", position: width > 540 ? "relative" : "", height: width > 540 ? "27rem" : "", boxShadow: width > 540 ? "none" : ""},
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
          {annualData.map(option => {
            console.log("option", option);
            return <Card id={option.id} style={option.style} title={option.title} price={option.price} storage={option.storage} users={option.users} sendGB={option.sendGB} textColor={option.textColor} defaultBack={option.defaultBack} />;
          })}
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
