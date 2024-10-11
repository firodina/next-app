"use client";
import React from "react";
import CustmerButton from "../CustomerBotton/CustmerButton";
import style from "./hero.module.css";
// import Image from 'next/image';

function Hero() {
  const handleScoller = () => {
    console.log("click");
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily
        </h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing amet, consectetur
          adipisicing elit
        </p>
        <CustmerButton
          title="Explore cars"
          containerStyle={style.customButton}
          handleClick={handleScoller}
        />
      </div>
      <div
        className="hero
      __image-container"
      >
        <div className="hero__image">
          <img src="/hero.png" alt="hero" className="object-contain" />
        </div>
      </div>
      <div className="hero__image-overlay"></div>
    </div>
  );
}

export default Hero;
