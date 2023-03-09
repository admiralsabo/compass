import Image from "next/image";
import React from "react";
import logo from "../public/logo.svg";
const NavBar = () => {
  return (
    <>
      <div className="flex justify-between py-6 mx-2 place-items-center md:mx-8">
        <div className="flex place-items-center">
          <Image src={logo} alt="logo" width={41} height={41} />
          <span className="text-xl font-semibold font-oswald">Compass</span>
        </div>
        <div className="flex gap-2 ">
          <nav className="hidden sm:flex">
            <ul className="flex gap-4 uppercase font-roboto-mono place-items-center">
              <li className="hover:font-semibold">
                <a href="/">Home</a>
              </li>
              <li className="hover:font-semibold">
                <a href="/#WhatWeDo">Services</a>
              </li>
              <li className="hover:font-semibold">
                <a href="/#FeaturedWork">classes</a>
              </li>
              <li className="hover:font-semibold">
                <a href="/blog">Blog</a>
              </li>
              <li className="hover:font-semibold">
                <a href="/#OurValues">Pages</a>
              </li>
              <li className="px-2 py-1 text-white bg-black rounded-md hover:font-semibold">
                <a href="/#Contact">Let&apos;s Talk</a>
              </li>
            </ul>
          </nav>
          <hr className="h-auto w-[1px] bg-black hidden md:block" />
          <div>
            <ul className="hidden gap-2 place-item-center md:flex">
              <li className="hover:border-2 hover:font-semibold rounded-full border border-black w-[34px] h-[34px] flex justify-center pt-1">
                <a target="_blank" href="https://www.linkedin.com">
                  LN
                </a>
              </li>
              <li className="hover:border-2 hover:font-semibold rounded-full border border-black w-[34px] h-[34px] flex justify-center pt-1">
                <a target="_blank" href="https://www.instagram.com">
                  IN
                </a>
              </li>
              <li className="hover:border-2 hover:font-semibold rounded-full border border-black w-[34px] h-[34px] flex justify-center pt-1">
                <a target="_blank" href="https://www.facebook.com">
                  FB
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mx-2 border-black md:mx-8" />
    </>
  );
};

export default NavBar;
