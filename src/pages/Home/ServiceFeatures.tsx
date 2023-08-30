import React from "react";
import CodeIcon from "/src/assets/Images/noun-code.png";
import SeoIcon from "/src/assets/Images/noun-seo.png";
import UiuxIcon from "/src/assets/Images/noun-ui-ux.png";

const ServiceFeatures = () => {
  return (
    <>
      <article className="bg-natural-white px-8 py-32 xl:px-20 2xl:px-40">
        <h2 className="uppercase font-bold text-natural-orchid mb-4 text-md xl:text-xl">
          What we do
        </h2>
        <section className="grid grid-cols-1 gap-4 items-center md:grid-cols-2 lg:gap-36 2xl:gap-96">
          <h3 className="text-natural-dark-purple text-3xl capitalize font-bold lg:text-5xl 2xl:text-6xl">
            Best choice for your business
          </h3>
          <p className="text-natural-dark-purple text-md lg:text-xl 2xl:text-2xl">
            We provide the best services for your company by providing
            user-centric support that help grow your business.
          </p>
        </section>
        <section className="py-10 grid grid-cols-1 md:grid-cols-3 md:gap-7 lg:py-20 lg:gap-16 lg:px-16">
          <div className="flex flex-col gap-4 px-4 py-8 items-start justify-start group hover:shadow-lg focus:shadow-lg rounded-lg lg:px-8 ">
            <div className="bg-natural-light-lemon w-10 rounded-lg">
              <img src={CodeIcon} alt="Code icon" />
            </div>
            <p className="text-lg font-bold">Web Development</p>
            <p className="text-md">
              With the use of HTML, CSS and JavaScript we provide...
            </p>
            <button
              type="button"
              title="Learn More"
              className="text-natural-orchid px-4 py-2 rounded-lg group-hover:bg-natural-orchid group-hover:shadow-md group-hover:text-natural-white group-focus:bg-natural-orchid group-focus:shadow-md group-focus:text-natural-white"
            >
              Learn More &rarr;
            </button>
          </div>

          <div className="flex flex-col gap-4 px-4 py-8 items-start justify-start group hover:shadow-lg focus:shadow-lg rounded-lg lg:px-8">
            <div className="bg-natural-light-orange w-10 rounded-lg">
              <img src={UiuxIcon} alt="Code icon" />
            </div>
            <p className="text-lg font-bold">UI/UX Design</p>
            <p className="text-md">
              Creating minimalistic design to suit your user goals....
            </p>
            <button
              type="button"
              title="Learn More"
              className="text-natural-orchid px-4 py-2 rounded-lg group-hover:bg-natural-orchid group-hover:shadow-md group-hover:text-natural-white group-focus:bg-natural-orchid group-focus:shadow-md group-focus:text-natural-white"
            >
              Learn More &rarr;
            </button>
          </div>

          <div className="flex flex-col gap-4 px-4 py-8 items-start justify-start group hover:shadow-lg focus:shadow-lg rounded-lg lg:px-8">
            <div className="bg-natural-light-purple w-10 rounded-lg">
              <img src={SeoIcon} alt="Code icon" />
            </div>
            <p className="text-lg font-bold">SEO Optimization</p>
            <p className="text-md">
              Find traffic-driving keywords, building quality backlinks...
            </p>
            <button
              type="button"
              title="Learn More"
              className="text-natural-orchid px-4 py-2 rounded-lg group-hover:bg-natural-orchid group-hover:shadow-md group-hover:text-natural-white group-focus:bg-natural-orchid group-focus:shadow-md group-focus:text-natural-white"
            >
              Learn More &rarr;
            </button>
          </div>
        </section>
        
        <a href="http://" target="_blank" rel="noopener noreferrer" className="text-natural-orchid flex justify-end lg:px-16">More of our services &rarr;</a>
      </article>
    </>
  );
};

export default ServiceFeatures;
