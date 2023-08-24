import React from "react";
import DigitallyLogo from "/src/assets/Images/digitallylogo.png";

const Logo = () => {
  return (
    <>
      <a href="/">
        <div className="flex items-center">
          <img src={DigitallyLogo} alt="digitally logo" />
          <p className="font-interThin font-bold text-natural-orchid text-md">
            Digitally
          </p>
        </div>
      </a>
    </>
  );
};

export default Logo;
