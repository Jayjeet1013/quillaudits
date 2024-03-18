import Image from "next/image";
import React from "react";

const Footer = () => {
  const titleStyle = {
    fontFamily: "Jost",
    fontSize: "21px",
    fontWeight: 500,
    lineHeight: "36px",
    color: "#FFFFFF",
  };

  const subStyle = {
    fontFamily: "Jost",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "23px",
    color: "#F1F1F1",
  };

  const btnstyle = {
    fontFamily: "Jost",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "23px",
    color: "#FFFFFF",
  };

  return (
    <div
      className=" bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/BG.svg')" }}
    >
      <div className="px-7 lg:px-44  pt-8 pb-12">
        <div>
          <Image
            src={"/QuillAudits Logo.svg"}
            width={293}
            height={57}
            alt="logo"
          />
          <span className="font-[jost] font-normal leading-[24px] pl-24 text-[#EAEAEA] text-[16px] ">
            Making Web3 a safer place
          </span>
        </div>

        <div className="flex justify-between lg:flex-row flex-col-reverse mt-5 ">
          <div className="w-[235px]  ">
            <h1
              className=" border-b-2 border-[#2D83EE] w-[163px]  "
              style={titleStyle}
            >
              More About Quill
            </h1>

            <div className="mt-4 space-y-3">
              <h2 style={subStyle}>About Us</h2>
              <h2 style={subStyle}>FAQs</h2>
              <h2 style={subStyle}>Blockchains We Audit</h2>
            </div>

            <h2 className="font-[Jost] mt-10 text-[18px] leading-[26px] text-[#F1F1F1] ">
              Contact Us:
            </h2>
            <div className="space-y-3 ">
              <div className="flex gap-2">
                <Image
                  src={"/Email.svg"}
                  alt="imageemail"
                  width={23}
                  height={16}
                />
                <span className="font-[Jost] italic text-[#F1F1F1] text-[18px] leading-[26px] font-normal ">
                  audits@quillhash.com{" "}
                </span>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/Telegram.svg"}
                  alt="imageemail"
                  width={23}
                  height={16}
                />
                <span className="font-[Jost] italic text-[#F1F1F1] text-[18px] leading-[26px] font-normal ">
                  t.me/quillaudits{" "}
                </span>
              </div>
            </div>

            <div className="mt-4 ">
              <div className="flex gap-2">
                <Image
                  src={"/Location.svg"}
                  alt="imageemail"
                  width={23}
                  height={16}
                />
                <span className="font-[Jost] italic text-[#F1F1F1] text-[18px] leading-[26px] font-normal ">
                  Our Location:{" "}
                </span>
              </div>
              <div>
                <p className="font-[Jost] mt-3 text-[18px] leading-[26px] text-[#F1F1F1] ">
                  Office 104/105 Level 1, Emaar Square, Building 4 Sheikh
                  Mohammed Bin Rashid Boulevard Downtown Dubai, United Arab
                  Emirates P.O box: 416654
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse w-[75%] lg:flex-col  ">
            <div className="flex justify-between gap-10 flex-wrap ">
              <div>
                <h1
                  className=" border-b-2 border-[#2D83EE] w-[134px]  "
                  style={titleStyle}
                >
                  Audit Services
                </h1>
                <div className="space-y-3 mt-4 ">
                  <h2 style={subStyle}>Ethereum Audit</h2>
                  <h2 style={subStyle}>Polygon Audit</h2>
                  <h2 style={subStyle}>BSC Audit</h2>
                  <h2 style={subStyle}>Solana Audit</h2>
                  <h2 style={subStyle}>NEAR Audit</h2>
                  <h2 style={subStyle}>Algorand Audit</h2>
                  <h2 style={subStyle}>Tezos Audit</h2>
                  <h2 style={subStyle}>Hyperledger Fabric Audit</h2>
                  <h2 style={subStyle}>L1 Audit</h2>
                  <h2 style={subStyle}>Polkadot Audit</h2>
                  <h2 style={subStyle}>Wallet Audit</h2>
                  <h2 style={subStyle}>ZkSync Audit</h2>
                  <h2 style={subStyle}>Starknet Audit</h2>
                </div>
              </div>
              <div>
                <h1
                  className=" border-b-2 border-[#2D83EE] w-[147px]  "
                  style={titleStyle}
                >
                  Quill Ecosystem
                </h1>
                <div className="mt-4 space-y-3 ">
                  <h2 style={subStyle}>QuillAI</h2>
                  <h2 style={subStyle}>QuillCheck</h2>
                  <h2 style={subStyle}>QuillShield</h2>
                  <h2 style={subStyle}>QuillAcademy</h2>
                  <h2 style={subStyle}>QuillMonitor</h2>
                  <h2 style={subStyle}>Web3Suggest</h2>
                  <h2 style={subStyle}>Explore All Tools</h2>
                </div>
              </div>
              <div>
                <h1
                  className=" border-b-2 border-[#2D83EE] w-[139px]  "
                  style={titleStyle}
                >
                  Other Services
                </h1>
                <div className="mt-4 space-y-3 ">
                  <h2 style={subStyle}>Red Teaming</h2>
                  <h2 style={subStyle}>dApp Pentesting</h2>
                  <h2 style={subStyle}>DeFi Diligence</h2>
                  <h2 style={subStyle}>NFT Due Diligence</h2>
                  <h2 style={subStyle}>Rug Pull Due Diligence</h2>
                  <h2 style={subStyle}>Security Consultation</h2>
                  <h2 style={subStyle}>Blockchain Forensics</h2>
                  <h2 style={subStyle}>KYC (Know Your Customer)</h2>
                </div>
              </div>
              <div>
                <h1
                  className=" border-b-2 border-[#2D83EE] w-[108px]  "
                  style={titleStyle}
                >
                  Quick Links
                </h1>
                <div className="mt-4 space-y-3 ">
                  <h2 style={subStyle}>Pricing</h2>
                  <h2 style={subStyle}>Audit Process</h2>
                  <h2 style={subStyle}>Our Audits</h2>
                  <h2 style={subStyle}>Testimonials</h2>
                  <h2 style={subStyle}>Security Synopsis</h2>
                  <h2 style={subStyle}>Blog</h2>
                  <h2 style={subStyle}>Clients</h2>
                  <h2 style={subStyle}>
                    Careers
                    <span className="px-2 py-0.5 text-[13px] leading-[20px] bg-[#2D83EE] rounded-md ml-2  ">
                      Hiring
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:-mt-24 lg:ml-[25%] ">
              <h1
                className=" border-b-2  border-[#2D83EE] w-[159px]  "
                style={titleStyle}
              >
                Our Programmes
              </h1>
              <div className=" grid w-[889px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-2 ">
                <button
                  style={btnstyle}
                  className="bg-[#2870EA] w-[200px] font-[jost] font-medium btn-style text-[22px] leadding-[32px] text-[#FFFFFF]  py-2 rounded-md"
                >
                  Refer-Earn-Secure
                </button>
                <button
                  style={btnstyle}
                  className="bg-[#2870EA] w-[200px] font-[jost] font-medium btn-style text-[22px] leadding-[32px] text-[#FFFFFF]  py-2 rounded-md"
                >
                  Refer-Earn-Secure
                </button>
                <button
                  style={btnstyle}
                  className="bg-[#2870EA] w-[200px] font-[jost] font-medium btn-style text-[22px] leadding-[32px] text-[#FFFFFF]  py-2 rounded-md"
                >
                  Refer-Earn-Secure
                </button>
                <button
                  style={btnstyle}
                  className="bg-[#2870EA] w-[200px] font-[jost] font-medium btn-style text-[22px] leadding-[32px] text-[#FFFFFF]  py-2 rounded-md"
                >
                  Refer-Earn-Secure
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-b-2 pb-10 border-[#FFFFFF] border-opacity-10 ">
          <div className="flex justify-between gap-16 ">
            <Image src={"/img22.svg"} alt="image" width={212} height={60} />
            <Image src={"/img11.svg"} alt="image" width={212} height={60} />
          </div>
          <div className="flex gap-10  ">
            <Image src={"/icon1.svg"} alt="image" width={23} height={23} />
            <Image src={"/icon2.svg"} alt="image" width={23} height={23} />
            <Image src={"/icon3.svg"} alt="image" width={28} height={23} />
            <Image src={"/icon4.svg"} alt="image" width={25} height={23} />
            <Image src={"/icon5.svg"} alt="image" width={32} height={23} />
            <Image src={"/icon6.svg"} alt="image" width={30} height={23} />
            <Image src={"/icon7.svg"} alt="image" width={30} height={23} />
          </div>
        </div>

        <div className="flex justify-between mt-2 ">
          <h1 className="text-[#FFFFFF] text-[13px] font-normal leading-[20px]  ">
            All Rights Reserved. © Copyright 2023. QuillAudits - LLC{" "}
          </h1>
          <h2 className="text-[#FFFFFF] text-[13px] font-normal leading-[20px]  ">
            Privacy Policy
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
