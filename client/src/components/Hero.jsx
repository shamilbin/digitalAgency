import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12
1g:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700
dark:text-white"
    >
      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img className="w-20" src={assets.group_profile} alt="" />
        <p className="text-xs font-medium">Trusted By 10K+ People</p>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px]  font-medium xl:leading-[95px] max-w-5xl">
        Turning Imagination into{" "}
        <span className="bg-gradient-to-r from-[#c21c06] via-[#13099d] to-[#46047fd7] bg-clip-text text-transparent animate-gradient-x">
          digital
        </span>
        impact.
      </h1>

      <p className="text-sm sm:text-1g font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>
      <div className="relative">
        <img src={assets.hero_img} className="w-full max-w-6xl" alt="" />
        <img src={assets.bgImage1} className="absolute -top-4 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden" alt="" />
      </div>
    </div>
  );
};

export default Hero;
