import Image from "next/image";
import React from "react";

const Subscribe = () => {
  return (
    <div className="subs-grad ">
      <div className="max-w-[1200px] mx-auto mt-12 mb-7 md:mb-0  md:mt-20 lg:flex-row flex-col  justify-between flex py-8 ">
        <div className=" lg:w-[40%] text-center py-6 md:py-14 space-y-3 md:space-y-7">
          <h1 className="font-[Inter] font-bold text-[22px] leading-[35px] text-[#407AFF]  ">
            NEWSLETTER
          </h1>
          <h1 className="font-[jost] font-semibold text-[18px] md:text-[48px] leading-[40px] md:leading-[64px] text-[#14316C] ">
            Security First News Letter by QuillAudits
          </h1>
          <p className="font-[Inter] px-3 md:px-0 font-medium text-[16px] leading-[24px] text-[#2D3648] ">
            Subscribe for the most Exclusive Weekly security based newsletter
            and covering all the recent hacks up to date.
          </p>
        </div>
        <div>
          <div className="flex justify-center items-center ">
            <Image
              src={"/subsImage.svg"}
              alt="subsImage"
              width={580}
              height={330}
            />
          </div>
          <div className="w-[86%] mx-auto  ">
            <form className="flex items-center border border-gray-300 rounded-md py-2 px-1 overflow-hidden">
              <input
                type="email"
                placeholder="vitalik@ethereum.org"
                className="w-full px-3 py-2 placeholder-[#888888] outline-none text-gray-700"
              />
              <button
                type="submit"
                className="hidden btn-style md:block hover:opacity-90 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
            <div className=" flex items-center">
              <button
                type="submit"
                className="md:hidden  mt-3 mx-auto   bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
