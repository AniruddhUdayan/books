import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="hidden sm:py-[80px] sm:h-auto sm:px-[113px] sm:flex sm:justify-center sm:items-center">
        <Image
          src="/images/footer.png"
          alt="Your Logo"
          width={1216}
          height={1363}
        />
      </div>
      <div className="py-[34px] sm:h-auto px-[20px] sm:flex sm:justify-center sm:items-center">
        <Image
          src="/images/footer2.png"
          alt="Your Logo"
          width={335}
          height={1417}
        />
      </div>
    </>
  );
};

export default Footer;
