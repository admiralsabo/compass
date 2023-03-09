import Image from "next/image";
import React from "react";
import diamond from "../public/diamond.svg";
const HowWeWork = () => {
  return (
    <div className="flex flex-col justify-between gap-6 mx-2 mt-8 md:mx-8 md:flex-row">
      <div className="flex flex-col gap-2 md:w-3/4 shrink">
        <h3 className="font-roboto-mono ">How we work</h3>
        <h2 className="text-4xl font-bold uppercase font-syne max-w-[550px] ">
          We help our audience succeed with creative thinking.
        </h2>
        <Image src={diamond} alt="" />
      </div>
      <div className="hidden w-auto h-auto border-l border-black sm:block" />
      <div className="flex flex-col justify-between text-lg gap-11 md:w-1/3 shrink">
        <p className="max-w-[450px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          porttitor leo a diam sollicitudin tempor id eu. Pellentesque habitant
          morbi tristique senectus et netus. Praesent elementum facilisis.
        </p>
        <button className="font-roboto-mono p-2 px-4 text-xs text-white uppercase bg-black rounded-md max-w-[150px]">
          Our Services
        </button>
      </div>
    </div>
  );
};

export default HowWeWork;
