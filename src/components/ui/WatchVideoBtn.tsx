import React from "react";
import VideoIllus from "/src/assets/Images/watchvideo.png";

interface Props {
  value: string;
}

const WatchVideoBtn = ({ value }: Props) => {
  return (
    <>
      <button
        type="button"
        title="Watch Video"
        className="rounded-md bg--light--orchid py-2 px-2 font-interBlack text-natural-dark-purple text-sm flex items-center gap-2"
      >
        <img src={VideoIllus} alt="Video image" className="w-6" />
        {value}
      </button>
    </>
  );
};

export default WatchVideoBtn;
