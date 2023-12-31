import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Bookdemo = () => {
  return (
    <div className="bg-[#00364E] sm:flex h-auto flex-col sm:flex-row flex-wrap justify-center sm:py-[78px] sm:gap-[108px]  py-[32px] px-[20px]">
      <div className="flex flex-col gap-[20px]">
        <div
          className={`${poppins.className}  w-auto h-auto text-[#FFF] text-[48px] font-[700]`}
        >
          book a <span className="text-[#FCDE5A]">demo session</span>
        </div>
        <div
          className={`${poppins.className} w-auto h-auto text-[#FFF] text-[18px] font-[500]`}
        >
          a short sentence about how an academic counsellor would help the
          student.
        </div>
      </div>
      <div className="flex flex-col gap-1 w-auto justify-center mt-5">
        <div className="flex flex-row">
          <div
            className={`${poppins.className} sm:h-[56px] sm:w-auto bg-white rounded-tl-[20px] rounded-bl-[20px] flex justify-center items-center px-2 py-2 sm:px-[28px] text-[14px] sm:text-[16px] font-[500]  sm:gap-1`}
          >
            <span>+91 </span>
            <input className="outline-none w-auto"
             placeholder="enter your mobile number"
             />
            
          </div>
          <button className="bg-[#007BFF] text-white px-[24px] text-[14px] sm:text-[16px] sm:px-[28px] rounded-tr-[20px] rounded-br-[20px]">book now</button>
        </div>
        <div className={`text-white text-[16px] font-[500]`}>we will send an otp for verification</div>
      </div>
    </div>
  );
};

export default Bookdemo;
