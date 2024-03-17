import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [menu, setMenu] = useState(false);

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

  return (
    <div className="bg-[#15306f] ">
      <div className=" px-7 lg:px-44 relative">
        <div className="flex justify-between py-4 border-[] border-b-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src={"/QuillAudits Logo.svg"}
                width={216}
                height={42}
                alt="logo"
              />
            </Link>
          </div>

          {/* Menu Icon */}
          <div className="md:hidden">
            <div onClick={toggleMenu}>
              {menu ? (
                <AiOutlineClose style={{ color: "black", fontSize: 32 }} />
              ) : (
                <AiOutlineMenu style={{ color: "black", fontSize: 32 }} />
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className={`md:flex gap-12  items-center ${
              menu ? "absolute  left-0 top-full py-6 w-full bg-white" : "hidden"
            }`}
          >
            <div className="flex md:flex-row flex-col gap-5 md:gap-12 items-center text-[#0F1629] font-semibold text-[16px] ">
              <Link href={"/"} className="no-underline ">
                <h1 style={Navstyle}>Services</h1>
              </Link>
              <Link href={"/"} className="no-underline ">
                <h1 style={Navstyle}>Pricing</h1>
              </Link>
              <Link href={"/"} className="no-underline ">
                <h1 style={Navstyle}>Our Audits</h1>
              </Link>
              <Link href={"/"} className="no-underline ">
                <h1 style={Navstyle}>Tools</h1>
              </Link>
              <Link href={"/"} className="no-underline ">
                <h1 style={Navstyle}>Resources</h1>
              </Link>
              <Link href={"/"} className="no-underline ">
                <h1 style={Navstyle}>Refer-Earn-Secure</h1>
              </Link>
            </div>
          </div>
          {/* Get Started Button */}
          <div>
            <Link href={"/"} className="items-center flex ">
              <button className="bg-[#2870EA] font-[jost] font-medium text-[22px] leadding-[32px] text-[#FFFFFF] px-6 py-2 rounded-lg">
                Request An Audit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
