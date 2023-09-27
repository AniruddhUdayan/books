"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index: any) => {
    setActiveIndex(index);
  };

  const items = ["class 12+ | NEET", "study material", "result", "more"];

  return (
    <div className="h-[80px] px-[10px] xl:px-[115px] py-[8px] flex flex-row justify-between items-center flex-shrink-0 border border-[#2C91FF] bg-[#007BFF]">
      
      <div className="w-auto h-auto bg-[#007BFF] flex flex-row mx-[10px]">
        <div className="h-[70px] w-[84px] sm:h-[64px] sm:w-[78px]">
          <Image
            src="/images/InfinityLearn.png"
            alt="Your Logo"
            width={78}
            height={64}
          />
        </div>
        <div className="hidden sm:flex sm:flex-row sm:py-[17.5px]">
          <div className="h-auto border-l border-gray-300 "></div>
          <div className="text-gray-300 h-[8px] w-[8px] font-inter text-[6.8px] bg-[#007BFF] font-normal relative top-2 right-1 z-10">
            by
          </div>
        </div>
        <div className="hidden sm:flex sm:justify-center sm:items-center">
          <Image
            src="/images/Group.png"
            alt="Your Logo"
            width={133}
            height={30}
          />
        </div>
      </div>
      <div className="flex h-[36px] px-[10px] py-[12px] justify-center items-center gap-2  rounded-[24px] border border-white bg-white sm:hidden">
        <div className="text-[#007BFF] font-semibold font-poppins text-[14px] leading-6">Class 8 | Foun</div>
        <Image
                src="/images/expand_more_blue.png"
                alt="Your Logo"
                width={24}
                height={24}
              />
      </div>
      <div className="hidden sm:flex sm:flex-row xl:gap-[14px] sm:items-start sm:mx-[10px]">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(index)}
            className={`flex xl:px-[17px] py-[5px] items-start gap-[4px] rounded-[24px] ${
              activeIndex === index
                ? "border border-white border-opacity-25"
                : ""
            } ${
              activeIndex === index ? "bg-white bg-opacity-10" : "bg-opacity-10"
            } ${activeIndex === index ? "text-white" : "text-gray-300"} ${
              poppins.className
            } xl:text-base lg:text-[12px] uppercase tracking-wide text-[10px]`}
          >
            {item}
            <div className="">
              <Image
                src="/images/expand_more.png"
                alt="Your Logo"
                width={24}
                height={24}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="hidden sm:flex sm:flex-row sm:justify-center sm:items-center gap-[10px] xl:gap-[34px] sm:mx-[10px]">
        <div className="flex flex-row items-center gap-[12px]">
          <div className="h-[25px] w-[25px] xl:h-[40px] xl:w-[40px]">
            <Image
              src="/images/Phone.png"
              alt="Your Logo"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col">
            <div
              className={`${poppins.className} text-center text-[#FCDE5A] text-[10px] xl:text-[14px] font-normal leading-5 lowercase`}
            >
              need help? talk to experts
            </div>
            <div
              className={`${poppins.className} text-center text-[#FCDE5A] text-[12px] xl:text-[16px] font-normal leading-[24px] lowercase`}
            >
              1800-419-427
            </div>
          </div>
        </div>
        <div className="flex px-[10px]  justify-center items-center rounded-[20px] border border-white   bg-white">
          <div
            className={`${poppins.className} text-[#007BFF] flex justify-center items-center text-[10px] font-semibold leading-7`}
          >
            Sign In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
