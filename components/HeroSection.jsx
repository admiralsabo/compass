import Image from "next/image";
import React from "react";
import hero_image from "../public/hero-image.png";
const HeroSection = () => {
  return (
    <>
      <div className="h-auto flex flex-col gap-10 mx-2 md:mx-8 my-12">
        <div className="">
          <h1 className="font-syne font-semibold text-5xl sm:text-6xl md:text-8xl">
            We guide.
            <br />
            We inspire.
          </h1>
        </div>
        <div className="relative">
          <Image className="h-3/4" src={hero_image} alt="" />
        </div>
      </div>
      <hr className="mx-2 md:mx-8 border-black" />
    </>
  );
};

export default HeroSection;
