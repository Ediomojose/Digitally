import React from "react";
import FemaleAvatar1 from "/src/assets/Images/Ellipse 44.png";
import MaleAvatar1 from "/src/assets/Images/Ellipse 45.png";
import FemaleAvatar2 from "/src/assets/Images/Ellipse 51.png";
import UserIcon from "/src/assets/Images/users.png";


const TeamCard = () => {
  return (
    <>
      <section className="bg-natural-white  rounded-lg z-50 absolute bottom-12 right-0 flex flex-col items-center justify-center gap-1 px-2 py-2 shadow-lg lg:bottom-28 lg:right-10 2xl:bottom-40 2xl:right-20">
        <p className="font-bold text-sm text-natural-dark-purple">Our Creative Team</p>
        <div className="flex relative left-4">
            <img src={FemaleAvatar1} alt="Human avastar" className="z-20 w-10 bg-natural-orchid rounded-full relative"/>
            <img src={MaleAvatar1} alt="Human avastar" className="z-30 w-10 bg-natural-lemon rounded-full relative right-3"/>
            <img src={FemaleAvatar2} alt="Human avastar" className="z-40 w-10 bg-natural-soft-cheddar rounded-full relative right-5"/>
            <p className="bg-natural-grey text-center flex items-center justify-center w-10 rounded-full relative right-8 z-50 text-natural-orchid font-bold">3+</p>
        </div>
        <img src={UserIcon} alt="user icon" className="rounded-full absolute z-50 bg-natural-soft-cheddar bottom-14 right-40"/>
      </section>
    </>
  );
};

export default TeamCard;
