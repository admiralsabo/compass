import Image from "next/image";
import React from "react";
import featured1 from "../public/featured-1.png";
import featured2 from "../public/featured-2.png";
import featured3 from "../public/featured-3.png";
import featured4 from "../public/featured-4.png";
import featured5 from "../public/featured-5.png";
const FeaturedWork = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-12 m-2 mt-4 md:m-8 md:flex-row">
        <div className="w-full md:w-1/3 shrink-0">
          <h2 className="text-4xl font-bold uppercase font-syne ">
            Featured
            <br /> Work
          </h2>
          <p className="font-syne">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="hidden w-auto h-auto border-l border-black sm:block" />
        <div className="flex flex-col justify-center w-full gap-4 md:w-2/3 shrink">
          <div className="flex flex-col justify-between">
            <div className="relative w-full group">
              <Image src={featured1} alt="" />
              <div className="absolute top-0 justify-center hidden w-full h-full bg-black bg-opacity-70 group-hover:flex">
                <button className="self-center p-2 text-white bg-black rounded-lg font-syne">
                  View Project
                </button>
              </div>
            </div>
            <div className="flex justify-between font-syne">
              <span>Brainstorm</span>
              <span>2022</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-between">
              <div className="relative w-full group">
                <Image src={featured2} alt="" />{" "}
                <div className="absolute top-0 justify-center hidden w-full h-full bg-black bg-opacity-70 group-hover:flex">
                  <button className="self-center p-2 text-white bg-black rounded-lg font-syne">
                    View Project
                  </button>
                </div>
              </div>
              <div className="flex justify-between font-syne">
                <span>Collaborate</span>
                <span>2022</span>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="relative w-full group">
                <Image src={featured3} alt="" />
                <div className="absolute top-0 justify-center hidden w-full h-full bg-black bg-opacity-70 group-hover:flex">
                  <button className="self-center p-2 text-white bg-black rounded-lg font-syne">
                    View Project
                  </button>
                </div>
              </div>
              <div className="flex justify-between font-syne">
                <span>Content Creation</span>
                <span>2022</span>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="relative w-full group">
                <Image src={featured4} alt="" />
                <div className="absolute top-0 justify-center hidden w-full h-full bg-black bg-opacity-70 group-hover:flex">
                  <button className="self-center p-2 text-white bg-black rounded-lg font-syne">
                    View Project
                  </button>
                </div>
              </div>
              <div className="flex justify-between font-syne">
                <span>Unite</span>
                <span>2022</span>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="relative w-full group">
                <Image src={featured5} alt="" />
                <div className="absolute top-0 justify-center hidden w-full h-full bg-black bg-opacity-70 group-hover:flex">
                  <button className="self-center p-2 text-white bg-black rounded-lg font-syne">
                    View Project
                  </button>
                </div>
              </div>
              <div className="flex justify-between font-syne">
                <span>Pure Vision</span>
                <span>2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-2 border-black md:mx-8" />
    </>
  );
};

export default FeaturedWork;
