"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Review from "@/components/Review&Detail/Review";
import Bookdemo from "@/components/BookDemo/Bookdemo";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export default function Home() {
  const [imagePath, setImagePath] = useState("/images/book.png");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("left");

  const toggleImage = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (animationDirection === "left") {
      setAnimationDirection("right");
    } else {
      setAnimationDirection("left");
    }

    setTimeout(() => {
      if (imagePath === "/images/book.png") {
        setImagePath("/images/book2.png");
      } else {
        setImagePath("/images/book.png");
      }

      setIsAnimating(false);
    }, 0); // Adjust the delay duration as needed
  };
  return (
    <>
      <Navbar />
      <div className="h-full bg-[#007BFF] pb-[61px] flex justify-center">
        <div className="sm:flex sm:flex-col lg:flex-row sm:gap-[40px] sm:mx-[112px] sm:pt-[28px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex h-full flex-col ">
              <div className=""> 
                <div className="flex flex-row gap-[55px] justify-center w-full relative bottom-6 sm:bg-[#D4E9FF] sm:rounded-[20px]">
                  <div className="hidden sm:h-[510px] sm:flex sm:flex-col sm:justify-center relative right-6">
                    <div
                      className={`h-[32px] w-[32px] bg-white rounded-[8px] transform ${
                        animationDirection === "left"
                          ? "translate-x-[50px]"
                          : "translate-x-0"
                      } transition-transform`}
                      onClick={toggleImage}
                    >
                      <Image
                        src="/images/left.png"
                        alt="Your Logo"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div
                    className={`h-[418px] top-3 sm:left-2 sm:top-6 relative overflow-hidden`}
                  >
                    <Image
                      src={imagePath}
                      alt="Your Logo"
                      width={332}
                      height={442}
                    />
                  </div>
                  <div className="hidden sm:h-[510px] sm:flex sm:flex-col sm:justify-center relative right-6">
                    <div
                      className={`h-[32px] w-[32px] bg-white rounded-[8px] transform rotate-180 ${
                        animationDirection === "right"
                          ? "translate-x-[50px]"
                          : "translate-x-0"
                      } transition-transform`}
                      onClick={toggleImage}
                    >
                      <Image
                        src="/images/left.png"
                        alt="Your Logo"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:w-[588px] sm:h-[60px] sm:rounded-[12px] sm:bg-[#00364E] sm:flex sm:justify-center sm:items-center sm:text-[#FFF] sm:text-[16px] sm:font-normal">
                {`what's in it for you?`}
              </div>
            </div>
          </div>
          <div className="mx-[20px] sm:flex sm:flex-col sm:h-auto sm:min-w-[410px]">
            <div
              className={`${poppins.className} w-auto text-white sm:text-[48px] text-[20px] font-bold leading-60 `}
            >
              IL books for{" "}
              <span className="text-[#FCDE5A]">NEET Foundation</span>
              <span className="sm:text-[32px] font-[400]">
                {" "}
                - class 8, 9 & 10
              </span>
            </div>
            <div className="flex flex-row mt-[8px] gap-2 w-auto flex-wrap">
              <div
                className={`${poppins.className} text-[14px] sm:text-[18px] text-[#FFF] font-[600]`}
              >
                4.5
              </div>
              <div className="flex flex-row gap-4">
                {" "}
                <div className="flex flex-row gap-1">
                  <div className="h-full w-full flex items-center">
                    <Image
                      src="/images/star.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                  <div className="h-full w-full flex items-center">
                    <Image
                      src="/images/star.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                  <div className="h-full w-full flex items-center">
                    <Image
                      src="/images/star.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                  <div className="h-full w-full flex items-center">
                    <Image
                      src="/images/star.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                  <div className="h-full w-full flex items-center">
                    <Image
                      src="/images/star_half.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                </div>
                <div className=" flex flex-row">
                  <div className="h-auto border-l border-gray-300 "></div>
                </div>
                <div
                  className={`${poppins.className} text-[#FFF] text-[12px] sm:text-[14px] font-[500]`}
                >
                  171 Reviews
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap mt-[25.5px] w-auto gap-3">
              <div className="flex w-full sm:w-[188px] sm:flex-col justify-between items-start py-2 px-[14px] rounded-[12px] bg-[#FFF] border-[2px] border-solid border-[#06AA2F] gap-[10px] transform hover:scale-105 transition-transform duration-300">
                <div>
                  {" "}
                  <div className="relative right-[21.5px]">
                    {" "}
                    <Image
                      src="/images/Tags.png"
                      alt="Your Logo"
                      width={132}
                      height={26}
                    />
                  </div>
                  <div
                    className={`${poppins.className} text-[#080E14] text-[14px] font-[600]`}
                  >
                    class 8, 9 & 10
                  </div>
                </div>
                <div>
                  {" "}
                  <div
                    className={`${poppins.className} text-[#06AA2F] text-[14px] font-[600]`}
                  >
                    save 33%
                  </div>
                  <div className="flex flex-row items-center justify-center gap-1">
                    <div
                      className={`${poppins.className} text-[#007BFF] text-[18px] font-[700]`}
                    >
                      ₹ 8,660
                    </div>
                    <div className="h-[21px] flex justify-center items-center">
                      <Image
                        src="/images/price.png"
                        alt="Your Logo"
                        width={53}
                        height={21}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative top-1 flex justify-between w-full h-auto sm:w-[188px] sm:h-[118px] sm:flex-col sm:items-start py-2 px-[14px] rounded-[12px] bg-[#FFF] border-[2px] border-solid border-[#06AA2F] sm:gap-[10px] transform hover:scale-105 transition-transform duration-300">
                <div
                  className={`${poppins.className} text-[#080E14] text-[14px] font-[600]`}
                >
                  class 8 & 9
                </div>
                <div>
                  {" "}
                  <div
                    className={`${poppins.className} text-[#06AA2F] text-[14px] font-[600]`}
                  >
                    save 12%
                  </div>
                  <div className="flex flex-row items-center justify-center gap-1">
                    <div
                      className={`${poppins.className} text-[#007BFF] text-[18px] font-[700]`}
                    >
                      ₹ 6,660
                    </div>
                    <div className="h-[21px] flex justify-center items-center">
                      <Image
                        src="/images/price.png"
                        alt="Your Logo"
                        width={53}
                        height={21}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative top-1 flex w-full md:h-[118px] sm:w-[188px] sm:h-[118px] sm:flex-col justify-between items-start py-2 px-[14px] rounded-[12px] bg-[#FFF] border-[2px] border-solid border-[#06AA2F] gap-[10px] transform hover:scale-105 transition-transform duration-300">
                <div
                  className={`${poppins.className} text-[#080E14] text-[14px] font-[600]`}
                >
                  class 8
                </div>
                <div>
                  {" "}
                  <div
                    className={`${poppins.className} text-[#06AA2F] text-[14px] font-[600]`}
                  ></div>
                  <div className="flex flex-row items-center justify-center gap-1">
                    <div
                      className={`${poppins.className} text-[#007BFF] text-[18px] font-[700]`}
                    >
                      ₹ 5,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:mt-[20px] sm:flex-wrap sm:max-w-[588px] sm:flex sm:flex-row sm:w-auto sm:justify-center sm:items-center sm:gap-[6px] sm:rounded-[12px] sm:bg-[#F1F2F6] sm:px-[12px]">
              <div
                className={`${poppins.className} py-[8px] px-[16px] text-[#080E14] text-[14px] font-[500]`}
              >
                Biology 24 Books
              </div>
              <div
                className={`${poppins.className} py-[8px] px-[16px] text-[#080E14] text-[14px] font-[500]`}
              >
                Physics 12 Books
              </div>
              <div
                className={`${poppins.className} py-[8px] px-[16px] text-[#080E14] text-[14px] font-[500]`}
              >
                Chemistry 12 Books
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-row sm:gap-[20px] sm:flex-wrap sm:mt-[32px]">
              <div className="flex flex-row gap-3">
                <Image
                  src="/images/checklist.png"
                  alt="Your Logo"
                  width={24}
                  height={24}
                />
                <div
                  className={` ${poppins.className} text-[#FFF] text-[14px] font-normal`}
                >
                  based on latest neet pattern
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Image
                  src="/images/checklist.png"
                  alt="Your Logo"
                  width={24}
                  height={24}
                />
                <div
                  className={` ${poppins.className} text-[#FFF] text-[14px] font-normal`}
                >
                  concise theory + practice questions
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Image
                  src="/images/checklist.png"
                  alt="Your Logo"
                  width={24}
                  height={24}
                />
                <div
                  className={` ${poppins.className} text-[#FFF] text-[14px] font-normal`}
                >
                  topic-wise Detailed MCQs for revision
                </div>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-wrap sm:flex-row sm:gap-3 sm:mt-[30px]">
              <div className="flex px-[32px] py-[12px] justify-center items-center gap-[10px] rounded-[12px] border-[1px] border-solid border-[#FFF] transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-row gap-2">
                  <div
                    className={`${poppins.className} text-[#FFF] text-[16px] font-[600]`}
                  >
                    download sample
                  </div>
                  <Image
                    src="/images/download.png"
                    alt="Your Logo"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex px-[62px] py-[12px] justify-center items-center gap-[10px] rounded-[12px] bg-[#FFF] transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-row gap-2">
                  <div
                    className={`${poppins.className} text-[#007BFF] text-[16px] font-[600]`}
                  >
                    buy now
                  </div>
                  <Image
                    src="/images/buy.png"
                    alt="Your Logo"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F2F6] h-auto py-[32px] px-[20px sm:hidden flex flex-col items-center gap-[36px]">
        <Image
          src="/images/books3.png"
          alt="Your Logo"
          width={335}
          height={231}
        />
        <div className="flex flex-col gap-3">
          {" "}
          <div className="flex flex-row gap-3">
            <Image
              src="/images/checklist.png"
              alt="Your Logo"
              width={18}
              height={18}
            />
            <div
              className={` ${poppins.className} text-[#000] text-[14px] font-normal`}
            >
              based on latest neet pattern
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              src="/images/checklist.png"
              alt="Your Logo"
              width={18}
              height={18}
            />
            <div
              className={` ${poppins.className} text-[#000] text-[14px] font-normal`}
            >
              concise theory + practice questions
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              src="/images/checklist.png"
              alt="Your Logo"
              width={18}
              height={18}
            />
            <div
              className={` ${poppins.className} text-[#000] text-[14px] font-normal`}
            >
              topic-wise Detailed MCQs for revision
            </div>
          </div>
        </div>
        <Image
          src="/images/seeNow.png"
          alt="Your Logo"
          width={335}
          height={160}
        />
      </div>
      <Review />
      <div className="hidden w-auto bg-[#00364E] sm:flex flex-col justify-center items-center py-[80px] gap-[40px]">
        <Image
          src="/images/neet.png"
          alt="Your Logo"
          width={880}
          height={144}
        />
        <Image
          src="/images/testSeries.png"
          alt="Your Logo"
          width={806}
          height={128}
        />
      </div>
      <div className="sm:hidden bg-[#00364E] flex justify-center">
        <Image
          src="/images/testSeries2.png"
          alt="Your Logo"
          width={375}
          height={332}
        />
      </div>
      <div className="bg-[#F1F2F6] pt-[80px] h-auto w-full sm:flex justify-center hidden">
        <Image
          src="/images/app.png"
          alt="Your Logo"
          width={1040}
          height={659}
        />
      </div>
      <div className="bg-[#F1F2F6] h-auto w-full flex justify-center sm:hidden">
        <Image
          src="/images/app2.png"
          alt="Your Logo"
          width={375}
          height={3023}
        />
      </div>
      <Bookdemo />
      <Footer />
    </>
  );
}
