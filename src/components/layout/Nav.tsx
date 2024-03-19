import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navBg, setNavBg] = useState("transparent");

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const Navstyle = {
    fontFamily: "Jost",
    fontSize: "22px",
    fontWeight: 400,
    lineHeight: "32px",
    letterSpacing: "0em",
    color: "#FFFFFF",
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setNavBg("[#15306f]");
    } else {
      setNavBg("transparent");
    }
  }, [scrollPosition]);

  return (
    <div
      className={`fixed top-0 z-50 w-full bg-${navBg} transition-all duration-500`}
    >
      <div className=" px-4 lg:px-8 max-w-[1550px] mx-auto   relative">
        <div className="flex justify-between py-4 border-opacity-20 border-[#FFFFFF] border-b-2">
          {/* Logo */}
          <div className="xl:flex hidden items-center">
            <Link href={"/"}>
              <Image
                src={"/QuillAudits Logo.svg"}
                className=" w-[170px] lg:w-[216px]  "
                width={216}
                height={42}
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex xl:hidden items-center">
            <Link href={"/"}>
              <Image src={"/logo.svg"} width={41} height={42} alt="logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className={`xl:flex xl:gap-10  items-center ${
              menu
                ? "absolute gap-3 left-0 px-4 top-full py-6 w-[100%] bg-[#15306f] "
                : "hidden"
            }`}
          >
            <div className="flex md:flex-row flex-col md:gap-6  2xl:gap-12 xl:gap-8 items-center  text-[#0F1629] font-semibold text-[12px] xl:text-[16px] ">
              <Link href={"/"} className="no-underline ">
                <div className="dropdown ">
                  <button
                    className="flex  hover:opacity-60 items-center justify-center gap-1 "
                    style={Navstyle}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                    <FaChevronDown size={17} className="mt-1.5 " />
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">Service One</li>
                    <li className="dropdown-item">Service Two</li>
                    <li className="dropdown-item">Service Three</li>
                  </ul>
                </div>
              </Link>
              <Link href={"/"} className="no-underline ">
                <h1 style={Navstyle} className="pt-2 hover:opacity-60 ">
                  Pricing
                </h1>
              </Link>
              <Link href={"/"} className="no-underline ">
                <h1 style={Navstyle} className="pt-2  hover:opacity-60 ">
                  Our Audits
                </h1>
              </Link>
              <Link href={"/"} className="no-underline ">
                <div className="dropdown  ">
                  <button
                    className="flex  hover:opacity-60 items-center justify-center gap-1 "
                    style={Navstyle}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tools
                    <FaChevronDown size={17} className="mt-1.5 " />
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">Tool One</li>
                    <li className="dropdown-item">Tool Two</li>
                    <li className="dropdown-item">Tool Three</li>
                  </ul>
                </div>
              </Link>
              <Link href={"/"} className="no-underline ">
                <div className=" dropdown">
                  <button
                    className="flex   hover:opacity-60 items-center justify-center gap-1 "
                    style={Navstyle}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resources
                    <FaChevronDown size={17} className="mt-1.5 " />
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">Resource One</li>
                    <li className="dropdown-item">Resource Two</li>
                    <li className="dropdown-item">Case Studies</li>
                  </ul>
                </div>
              </Link>
              <Link href={"/"} className="no-underline ">
                <h1 style={Navstyle} className="pt-2  hover:opacity-60">
                  Refer-Earn-Secure
                </h1>
              </Link>
            </div>
          </div>
          {/* Get Started Button */}
          <div className="flex items-center ">
            <button className="  hover:opacity-80 btn-style font-[jost] font-medium text-[12px] md:text-[18px] xl:text-[22px] leadding-[32px] text-[#FFFFFF] px-6 py-2 rounded-lg">
              Request An Audit
            </button>
          </div>

          {/* Menu Icon */}
          <div className=" xl:hidden flex items-center">
            <div onClick={toggleMenu}>
              {menu ? (
                <AiOutlineClose style={{ color: "white", fontSize: 32 }} />
              ) : (
                <AiOutlineMenu style={{ color: "white", fontSize: 32 }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
