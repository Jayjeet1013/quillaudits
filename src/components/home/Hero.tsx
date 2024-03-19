import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat pt-12 md:pt-28"
      style={{ backgroundImage: "url('/bghero.svg')" }}
    >
      <div className="max-w-[1200px] xl:px-0 lg:px-4  mx-auto pt-20 ">
        <h1 className="md:hidden mx-4 mb-3 font-[Jost] w-medium text-[16px] leading-[20px] text-[#FFFFFF]  border-b-2 border-[#2D83EE] w-[92px]  ">
          Case Studies
        </h1>

        <div className="justify-between  md:items-center gap-10 lg:gap-4 flex lg:flex-row flex-col ">
          <div className="hero-grad relative md:w-[555px] h-[250px] md:h-[520px] rounded-[8px] space-y-12 ">
            <div className="flex items-center justify-center pt-16 md:pt-[190px]  ">
              <Image
                src={"/pen.svg"}
                width={438}
                height={140}
                className="w-[326px] md:w-[438px] "
                alt="pen image"
              />
            </div>

            <div className="absolute  md:top-0 right-6 md:-right-20  bg-[#FFFFFF] items-center flex justify-center rounded-md w-[140px] md:w-[180px] h-[60px] md:h-[80px] ">
              <Image
                src={"/logopen.svg"}
                alt="image"
                width={152}
                height={49}
                className="w-[104px] md:w-[150px]  "
              />
            </div>

            <div className="hidden md:block  px-12  ">
              <p className=" md:w-[334px] text-[16px] leading-[24px] font-normal font-[Poppins] text-[#FFFFFF]">
                Carpe Diem Pension, a blockchain-based retirement fund, offers
                permanent payouts through CDP deposits, with a 4.32% annual
                inflation claimable by depositors.
              </p>
            </div>
          </div>

          <div className="space-y-6 xl:px-0 px-4 lg:pt-[200px] lg:w-[60.5%] ">
            <div className="text-[36px] xl:text-[48px] font-[jost] leading-[43px] md:leading-[58px] font-medium text-[#FFFFFF]  ">
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
        <div className="mt-16 pb-1 xl:px-0 px-4 ">
          <p className="font-[jost] text-[12px] md:text-[16px] leading-[24px] font-medium text-[#FFFFFF75] ">
            QuillAudits --{">"} Resources --{">"}{" "}
            <span className="text-[#FFFFFF] "> Case Studies</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
