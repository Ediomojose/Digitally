import React from "react";
import Button from "../../components/ui/Button";
import WatchVideoBtn from "../../components/ui/WatchVideoBtn";
import HeroImage from "/src/assets/Images/heroimage.png";
import UsersIcon from "/src/assets/Images/users.png";
import SendIcon from "/src/assets/Images/send.png";
import MailIcon from "/src/assets/Images/users.png";
import GroupShapes from "/src/assets/Images/Group 73.png";

const HeroSection = () => {
  return (
    <>
      <main className="bg-natural-light-orchid grid grid-cols-2 gap-x-20 justify-center items-center py-6 px-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl  font-bold text-natural-dark-purple">We Provide Creative Ideas For Your Brands.</h1>
          <p className="text-natural-dark-purple">
            Our goal is to achieve your goal by providing user-centric support
            to grow your business
          </p>
          <div className="flex gap-4">
            <Button />
            <WatchVideoBtn value="Watch Video" />
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="Image of a woman" />
        </div>
      </main>
    </>
  );
};

export default HeroSection;
