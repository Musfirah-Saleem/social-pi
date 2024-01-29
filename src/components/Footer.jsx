import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" text-black  mt-[250px] py-6  items-center border-t-2 border-gray-120">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between ">
          <div>&copy; 2022 SocialPI</div>
          <div className="flex gap-2">
            <span className="text-black">About</span>
            <img src="./Vector.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
