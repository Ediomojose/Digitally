import React from "react";
import Button from "../../components/ui/Button";
import WatchVideoBtn from "../../components/ui/WatchVideoBtn";
import HeroImage from "/src/assets/Images/heroimage.png";
import UsersIcon from "/src/assets/Images/users.png";
import SendIcon from "/src/assets/Images/send.png";
import MailIcon from "/src/assets/Images/mail.png";
import GroupShapes from "/src/assets/Images/Group 73.png";
import RectangleShape from "/src/assets/Images/Rectangle 112.png";
import RectangleShape2 from "/src/assets/Images/Rectangle 113.png";
import VectorShape from "/src/assets/Images/Vector 3.png";
import VectorShape2 from "/src/assets/Images/Vector 2.png";
import BrandTrust from "../../components/ui/BrandTrust";

const HeroSection = () => {
  return (
    <>
      <main className="bg-natural-light-orchid grid grid-cols-2 absolute gap-x-20 justify-center items-center py-6 px-8">
        <div className="relative">
          <h1 className="text-4xl font-bold text-natural-dark-purple mb-4">
            We Provide Creative Ideas For Your Brands.
          </h1>
          <p className="text-natural-dark-purple mb-4">
            Our goal is to achieve your goal by providing user-centric support
            to grow your business
          </p>
          <div className="flex gap-4">
            <Button />
            <WatchVideoBtn value="Watch Video" />
          </div>
          <div className="absolute left-0 top-0 w-3/4">
            <img src={VectorShape2} alt="vector line"/>
            <img src={VectorShape2} alt="vector line"/>
            <img src={VectorShape2} alt="vector line"/>
            <img src={VectorShape2} alt="vector line"/>
          </div>
          <img src={MailIcon} alt="Mail Icom" className="bg-natural-lemon rounded-lg w-10 absolute top-40 left-full"/>
          <img src={RectangleShape2} alt="" className="absolute top-20 left-full w-3"/>
        </div>
        <div className="relative">
          <img
            src={HeroImage}
            alt="Image of a woman"
            className="relative z-40"
          />
          <img
            src={GroupShapes}
            alt="Shapes"
            className="absolute top-20 right-8 w-28 z-0"
          />
          <img
            src={SendIcon}
            alt="Send icon"
            className="bg-natural-orchid rounded-xl w-10 absolute left-0 top-0"
          />
          <img
            src={RectangleShape}
            alt=""
            className="absolute top-10 right-8  w-3 "
          />
          <div className="absolute top-0 right-0 w-1/2">
            <img src={VectorShape} alt="Shape vector" />
            <img src={VectorShape} alt="Shape vector" />
            <img src={VectorShape} alt="Shape vector" />
          </div>
        </div>
        <BrandTrust/>
      </main>
    </>
  );
};

export default HeroSection;
