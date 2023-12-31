import React from "react";
import SportifyLogo from "/src/assets/Images/sportify.png";
import GoogleLogo from "/src/assets/Images/google-logo.png";
import TinderLogo from "/src/assets/Images/tinder.png";
import Pininterest from "/src/assets/Images/pininterest.png";

const BrandTrust = () => {
  return (
    <>
      <section className="flex items-center justify-center gap-6 bg-natural-white p-6 absolute top-full right-0 z-50 rounded-tl-lg shadow-lg md:top-80 md:right-0 xl:[top:93%]">
        <img src={SportifyLogo} alt="Sportify Logo" className="w-16 md:w-24"/>
        <img src={GoogleLogo} alt="Google Logo"className="w-16 md:w-24"/>
        <img src={TinderLogo} alt="Tinder Logo" className="w-16 md:w-24"/>
        <img src={Pininterest} alt="Pinterest Logo" className="w-16 md:w-24"/>
      </section>
    </>
  );
};

export default BrandTrust;
