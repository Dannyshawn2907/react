import React from "react";
import "./HomeHero.css";
import Bike from "../assets/bike.png";
import Lock from "../assets/lock.png";
// import Icon from "../assets/Icon.png";  
import Food from "../assets/food.png";

const HomeHero = () => {

  const placeholder = 'Enter your address'

  return (
    <div className="hero">
      <div>
        <div className="he">
          <h1>Are You Starving?</h1>
          <p>Within a few clicks, find meals that are accessible near you</p>
        </div>
        <div className="delivery">
          <div className="deli">
            <p className="riil"><img src={Bike} alt="" />Delivery</p>
            <p className="pickup"><img src={Lock} alt="" />Pickup</p>
          </div>
          <div className="input">
            <input type="" placeholder={placeholder} />
            <button>Find food</button>
          </div>
        </div>
      </div>
      <div className="food">
        <img src={Food} alt="" />
      </div>
    </div>
  );
};

export default HomeHero;
