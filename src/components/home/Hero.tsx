import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#15306f] ">
      <div className="max-w-[1200px] mx-auto pt-20 ">
        <div className="justify-between flex  ">
          <div className="hero-grad w-[555px] h-[520px] rounded-[8px] space-y-12 ">
            <div className="flex items-center justify-center pt-[190px]  ">
              <Image
                src={"/pen.svg"}
                width={438}
                height={140}
                alt="pen image"
              />
            </div>

            <div className="  px-12  ">
              <p className=" w-[334px] text-[16px] leading-[24px] font-normal font-[Poppins] text-[#FFFFFF]">
                Carpe Diem Pension, a blockchain-based retirement fund, offers
                permanent payouts through CDP deposits, with a 4.32% annual
                inflation claimable by depositors.
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-[200px] w-[51.5%] ">
            <div className="text-[48px] font-[jost] leading-[58px] font-medium text-[#FFFFFF]  ">
              Securing Trust : Boosting Security and Strengthening Trust at
              Carpe Diem Pension
            </div>
            <div className="font-[Poppins] text-[20px] font-normal leading-[30px] text-[#FFFFFF] ">
              QuillAudits enhances Carpe Diem Pension by addressing 33
              vulnerabilities on the Pulse blockchain, boosting security and
              user trust in digital pensions.
            </div>
          </div>
        </div>
        <div className="mt-16 pb-1 ">
          <p className="font-[jost] text-[16px] leading-[24px] font-medium text-[#FFFFFF75] ">
            QuillAudits --{">"} Resources --{">"}{" "}
            <span className="text-[#FFFFFF] "> Case Studies</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
