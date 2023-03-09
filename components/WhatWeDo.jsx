import Image from "next/image";
import React from "react";
import circles from "../public/circles.svg";
import triangles from "../public/triangles.svg";
import drop from "../public/drop.svg";
import diamond from "../public/diamond.svg";
const WhatWeDo = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-12 m-2 mt-4 md:m-8 md:flex-row">
        <div className="md:w-1/3 shrink-0">
          <h2 className="text-4xl font-bold uppercase font-syne">What We Do</h2>
          <p className="font-syne">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="hidden w-auto h-auto border-l border-black sm:block" />
        <div className="flex flex-col justify-center w-full gap-4 md:w-2/3 shrink">
          <div className="flex gap-4">
            <div className="flex w-full gap-4">
              <div>
                <Image src={circles} alt="" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-syne">CLASSES</h3>
                <p className="max-w-[418px] font-syne">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
            <div className="w-[1px] h-3/4 border-black border-l self-center" />
            <div className="flex w-full gap-4">
              <div>
                <Image src={triangles} alt="" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-syne">CLASSES</h3>
                <p className="max-w-[418px] font-syne">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] border-black border-b" />
          <div className="flex w-full gap-4">
            <div className="flex gap-4">
              <div>
                <Image src={drop} alt="" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-syne">CLASSES</h3>
                <p className="max-w-[418px] font-syne">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
            <div className="w-[1px] h-3/4 border-black border-l self-center" />
            <div className="flex gap-4">
              <div>
                <Image src={diamond} alt="" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-syne">CLASSES</h3>
                <p className="max-w-[418px] font-syne">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-2 border-black md:mx-8" />
    </>
  );
};

export default WhatWeDo;
