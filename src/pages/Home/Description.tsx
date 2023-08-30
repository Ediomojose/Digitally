import React from "react";
import Button from "../../components/ui/Button";
import GroupShapes from "/src/assets/Images/Group 73.png";
import FemaleMale from "/src/assets/Images/Female and Male.png";
import GroupPicture from "/src/assets/Images/Group picture.png";
import ArrowLeft from "/src/assets/Images/Arrow 1.png";
import ArrowRight from "/src/assets/Images/Arrow 2.png";


const Description = () => {
  return (
    <>
      <aside className="grid grid-cols-1 md:grid-cols-2  ">
        <section className="px-4">
          <h1 className="text-3xl font-bold text-natural-dark-purple pb-4">Working together to provide excellence.</h1>
          <p className="text-md text-natural-dark-purple pb-4">
            We are a group of innovative professionals, working together to
            provide a user-centric world, where the users needs always comes
            first in the digital world. We have expertise on Data science, Web
            development, UI/UX design etc.
          </p>
          <Button value="Learn more"/>
        </section>
        <section className="flex flex-col gap-16 mt-14">
            <div className="relative">
                <img src={FemaleMale} alt="Picture of a male and a female" className="w-52 absolute top-5 right-0 z-40"/>
                <img
            src={GroupShapes}
            alt="Shapes"
            className=" absolute top-0 left-24 w-24 z-0"
          />
          <img src={ArrowRight} alt="Arrow" className="w-22 absolute top-20 right-6"/>
            </div>

            <div className="relative">
            <img src={GroupPicture} alt="Tech in group" className="w-52 absolute top-28 left-0 z-40"/>
            <img
            src={GroupShapes}
            alt="Shapes"
            className=" absolute top-48 right-20 w-24 z-0"
          />
            <img src={ArrowLeft} alt="Arrow" className="w-22 absolute  left-5"/>
            </div>
        </section>

      </aside>
    </>
  );
};

export default Description;
