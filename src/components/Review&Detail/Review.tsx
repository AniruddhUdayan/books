import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Review = () => {
  return (
    <div className="bg-[#007BFF] sm:bg-white flex flex-row gap-[42px] flex-wrap justify-center pt-[21px] h-full pb-[50px]">
      <div className="flex flex-col w-auto mx-[22px]">
        <div
          className={`${poppins.className} w-full flex justify-start text-[#080E14] text-[32px] font-[700] py-[20px]`}
        >
          reviews
        </div>
        <div className="flex flex-col w-auto h-auto border-[1px] border-solid border-[#CECFD0] rounded-[12px] bg-white">
          <div className="p-[30px]">
            <Image
              src="/images/review.png"
              alt="Your Logo"
              width={524}
              height={156}
            />
          </div>
          <hr></hr>
          <div className="p-[30px]">
            <Image
              src="/images/review2.png"
              alt="Your Logo"
              width={524}
              height={156}
            />
          </div>
          <hr></hr>
          <div className="p-[30px]">
            <Image
              src="/images/review2.png"
              alt="Your Logo"
              width={524}
              height={156}
            />
          </div>
          <hr></hr>
          <div className="p-[30px]">
            <Image
              src="/images/review2.png"
              alt="Your Logo"
              width={524}
              height={156}
            />
          </div>
          <hr></hr>
          <div
            className={`${poppins.className}  p-[30px] flex justify-center items-center text-[#007BFF] `}
          >
            show all 369 reviews
          </div>
        </div>
      </div>
      <div className="flex flex-col w-auto mx-[13px]">
        <div
          className={`${poppins.className} w-full flex justify-start text-[#080E14] text-[32px] font-[700] py-[20px]`}
        >
          details
        </div>
        <div className="max-w-[600px] flex flex-row flex-wrap w-auto h-auto gap-3">
          <div className="w-[188px] h-[154px] rounded-[12px] bg-[#F1F2F6] flex justify-center items-center">
            <div className="flex flex-col gap-[20px] w-auto items-center">
              {" "}
              <Image
                src="/images/details.png"
                alt="Your Logo"
                width={42}
                height={42}
              />
              <div className={`${poppins.className} text-[#000] text-[20px] font-[600]`}>48</div>
              <div className={`${poppins.className} text-[#000] text-[14px] font-[400]`}>no. of books</div>
            </div>
          </div>
          <div className="w-[188px] h-[154px] rounded-[12px] bg-[#F1F2F6] flex justify-center items-center">
            <div className="flex flex-col gap-[20px] w-auto items-center">
              {" "}
              <Image
                src="/images/details.png"
                alt="Your Logo"
                width={42}
                height={42}
              />
              <div className={`${poppins.className} text-[#000] text-[20px] font-[600]`}>48</div>
              <div className={`${poppins.className} text-[#000] text-[14px] font-[400]`}>no. of books</div>
            </div>
          </div>
          <div className="w-[188px] h-[154px] rounded-[12px] bg-[#F1F2F6] flex justify-center items-center">
            <div className="flex flex-col gap-[20px] w-auto items-center">
              {" "}
              <Image
                src="/images/details.png"
                alt="Your Logo"
                width={42}
                height={42}
              />
              <div className={`${poppins.className} text-[#000] text-[20px] font-[600]`}>48</div>
              <div className={`${poppins.className} text-[#000] text-[14px] font-[400]`}>no. of books</div>
            </div>
          </div>
          <div className="w-[188px] h-[154px] rounded-[12px] bg-[#F1F2F6] flex justify-center items-center">
            <div className="flex flex-col gap-[20px] w-auto items-center">
              {" "}
              <Image
                src="/images/details.png"
                alt="Your Logo"
                width={42}
                height={42}
              />
              <div className={`${poppins.className} text-[#000] text-[20px] font-[600]`}>48</div>
              <div className={`${poppins.className} text-[#000] text-[14px] font-[400]`}>no. of books</div>
            </div>
          </div>
          <div className="w-[188px] h-[154px] rounded-[12px] bg-[#F1F2F6] flex justify-center items-center">
            <div className="flex flex-col gap-[20px] w-auto items-center">
              {" "}
              <Image
                src="/images/details.png"
                alt="Your Logo"
                width={42}
                height={42}
              />
              <div className={`${poppins.className} text-[#000] text-[20px] font-[600]`}>48</div>
              <div className={`${poppins.className} text-[#000] text-[14px] font-[400]`}>no. of books</div>
            </div>
          </div>
          <div className="w-[188px] h-[154px] rounded-[12px] bg-[#F1F2F6] flex justify-center items-center">
            <div className="flex flex-col gap-[20px] w-auto items-center">
              {" "}
              <Image
                src="/images/details.png"
                alt="Your Logo"
                width={42}
                height={42}
              />
              <div className={`${poppins.className} text-[#000] text-[20px] font-[600]`}>48</div>
              <div className={`${poppins.className} text-[#000] text-[14px] font-[400]`}>no. of books</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
