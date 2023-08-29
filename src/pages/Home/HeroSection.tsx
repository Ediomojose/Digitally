import React from "react";
import Button from "../../components/ui/Button";
import WatchVideoBtn from "../../components/ui/WatchVideoBtn";
import HeroImage from "/src/assets/Images/heroimage.png";
import SendIcon from "/src/assets/Images/send.png";
import MailIcon from "/src/assets/Images/mail.png";
import GroupShapes from "/src/assets/Images/Group 73.png";
import RectangleShape from "/src/assets/Images/Rectangle 112.png";
import RectangleShape2 from "/src/assets/Images/Rectangle 113.png";
import VectorShape from "/src/assets/Images/Vector 3.png";
import VectorShape2 from "/src/assets/Images/Vector 2.png";
import BrandTrust from "../../components/ui/BrandTrust";
import TeamCard from "../../components/ui/TeamCard";

const HeroSection = () => {
  return (
    <>
      <main className="bg-natural-light-orchid grid grid-cols-1 absolute gap-10 justify-center items-center pt-6 pb-0 px-8 md:grid-cols-2 md:gap-20 md:py-6 xl:px-20 2xl:px-40 2xl:pb-0">
        <div className="relative">
          <h1 className="text-4xl font-bold text-natural-dark-purple mb-4 xl:text-7xl 2xl:text-8xl">
            We Provide Creative Ideas For Your Brands.
          </h1>
          <p className="text-natural-dark-purple mb-4 xl:text-xl 2xl:text-2xl">
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
            className="relative z-40 w-full"
          />
          <TeamCard/>
          <img
            src={GroupShapes}
            alt="Shapes"
            className="absolute top-20 right-0 z-0 md:w-28 md:right-8 lg:w-48 lg:top-28 2xl:w-60 2xl:top-52"
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
