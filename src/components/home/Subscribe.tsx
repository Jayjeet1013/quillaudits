import Image from "next/image";
import React from "react";

const Subscribe = () => {
  return (
    <div className="subs-grad ">
      <div className="max-w-[1200px] mx-auto mt-20 justify-between flex py-8 ">
        <div className="w-[40%] py-14 space-y-7">
          <h1 className="font-[Inter] font-bold text-[22px] leading-[35px] text-[#407AFF]  ">
            NEWSLETTER
          </h1>
          <h1 className="font-[jost] font-semibold text-[48px] leading-[64px] text-[#14316C] ">
            Security First News Letter by QuillAudits
          </h1>
          <p className="font-[Inter] font-medium text-[16px] leading-[24px] text-[#2D3648] ">
            Subscribe for the most Exclusive Weekly security based newsletter
            and covering all the recent hacks up to date.
          </p>
        </div>
        <div>
          <Image
            src={"/subsImage.svg"}
            alt="subsImage"
            width={580}
            height={330}
          />
          <div className="w-[86%] mx-auto ">
            <form className="flex items-center border border-gray-300 rounded-md py-2 px-1 overflow-hidden">
              <input
                type="email"
                placeholder="vitalik@ethereum.org"
                className="w-full px-3 py-2 placeholder-[#888888] outline-none text-gray-700"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
