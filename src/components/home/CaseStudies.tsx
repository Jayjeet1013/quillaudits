import Image from "next/image";
import React from "react";
import { VscCircle, VscCircleFilled } from "react-icons/vsc";

const CaseStudies = () => {
  
  const desstyle = {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "27px",
  };

  const titlestyle = {
    fontFamily: "Jost",
    fontSize: "34px",
    fontWeight: 700,
    lineHeight: "42px",
  };

  const subtitlestyle = {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "27px",
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-20 md:px-0 px-4 ">
      <div>
        <div className="flex md:flex-row  flex-col gap-6 md:gap-16 items-center justify-center  ">
          <div className="flex  md:w-[370px]  justify-center gap-6 flex-col  ">
            <div className="bg-[#FFABC9] px-[2px] font-[inter] text-[#00000A] text-[20px] font-bold ">
              Before QuillAudits
            </div>
            <div className=" font-[Poppins]  ">
              <p style={desstyle}>
                Exploits like reentrancy and front-running can let attackers
                withdraw extra funds and manipulate transaction timing for
                unfair gains
              </p>
              <p style={desstyle}>
                Vulnerabilities could allow users to mint CDP tokens or pension
                shares indefinitely, disrupting the system&apos;s economic balance.
              </p>
            </div>
          </div>

          <div className="hidden md:block ">
            <Image src={"/vline.svg"} alt="lineimage" width={1} height={270} />
          </div>

          <div className="flex md:w-[370px] justify-center gap-6 flex-col  ">
            <div className="bg-[#ABCDFF]  px-[2px] font-[inter] text-[#00000A] text-[20px] font-bold ">
              After QuillAudits
            </div>
            <div className=" font-[Poppins]  ">
              <p style={desstyle}>
                Implementation of reentrancy protection mechanisms.
              </p>
              <p style={desstyle} className="md:pt-[50px] ">
                Ensure precision in decimal handling with standard libraries,
                recalculate accurately, fix logic errors, and secure referral
                systems against exploitation.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex items-center justify-center ">
          <div className="w-[100%] md:w-[342px] h-[150px] box-grad mt-16 rounded-md pt-[10px] pl-6">
            <span className="font-[Inter] font-normal text-[14px] leading-[21px] text-[#808080] ">
              Headquarters
            </span>
            <p className=" font-[Inter] font-medium text-[16px] leading-[21px] text-[#00000A] ">
              Switzerland
            </p>
            <span className="font-[Inter] font-normal text-[14px] leading-[21px] text-[#808080] ">
              Chain
            </span>
            <p className=" font-[Inter] font-medium text-[16px] leading-[21px] text-[#00000A] ">
              Pulse Blockchain
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center my-12">
          <p className="text-[#0E3088] font-[jost] font-semibold text-[36px] leading-[39px] md:w-[60%] text-center ">
            See how QuillAudits is a trusted partner in 1000+ Audit stories
          </p>
          <div>
            <button className="  hover:opacity-80 mt-4 btn-style font-[jost] font-medium text-[22px] leadding-[32px] text-[#FFFFFF] px-6 py-2 rounded-lg">
              Request An Audit
            </button>
          </div>
        </div>
        <div className="flex gap-3 lg:flex-row flex-col-reverse lg:items-start items-center justify-between ">
          <div className="space-y-6 ">
            <div className="lg:w-[92%] xl:w-[72%] " style={desstyle}>
              Carpe Diem Pension, on Pulse blockchain, redefines retirement with
              a self-managed, inclusive, globally portable fund. Unique for its
              token burn mechanism, it ensures a sustainable 4.32% inflation
              payout. With $143.11k and 41.06% of CDP already burned, it serves
              35 users globally.
            </div>
            <div className="lg:w-[92%] xl:w-[60%] " style={titlestyle}>
              CarpeDiem Pension&apos;s Flexible, Blockchain-Enabled Future
            </div>
            <p className="lg:w-[92%] xl:w-[72%] " style={desstyle}>
              CarpeDiem Pension redefines retirement planning with a unique
              approach that deviates from traditional pension funds. With no
              minimum age for retirement, it offers flexibility and freedom,
              ensuring all genders receive equal treatment. CarpeDiem Pension
              ensures blockchain transparency, anonymity, and global
              accessibility, safeguarding pensions during international
              relocation. Easily transfer pensions to loved ones; share wallet
              access. Re-deposit payouts for increased future benefits.
              Importantly, CarpeDiem Pension prioritizes deposit security by
              avoiding utilizing client funds for internal investments. To
              become a part of this forward-thinking pension scheme, one simply
              needs to install and configure a blockchain wallet.
            </p>
            <Image
              src={"/1stimg.svg"}
              alt="1stimage"
              width={760}
              height={375}
            />
            <h1 className="lg:w-[92%] xl:w-[60%] " style={titlestyle}>
              CarpeDiem Pension&apos;s Challenges: Enhancing Security Against
              Reentrancy, Front-Running, and Infinite Minting
            </h1>
            <p className="lg:w-[92%] xl:w-[72%] " style={desstyle}>
              CarpeDiem Pension confronts critical security challenges,
              including the risks of reentrancy and front-running
              exploits.Malicious actors may exploit contract vulnerabilities,
              withdrawing excess funds or manipulating transaction timing for
              unfair advantages. System faces infinite minting threats, risking
              economic stability with endless creation of CDP tokens or pension
              shares.  Addressing these challenges is paramount to safeguarding
              the integrity and security of CarpeDiem Pension.
            </p>
            <Image
              src={"/2ndimg.svg"}
              alt="2ndimage"
              width={640}
              height={375}
            />
            <h1 className="lg:w-[92%] xl:w-[60%] " style={titlestyle}>
              CarpeDiem Pension&apos;s Journey Through our Audit Process
            </h1>
            <div className="space-y-8  ">
              <h1 style={subtitlestyle}>1. Information Gathering:</h1>
              <div  className=" lg:w-[92%] xl:w-[78%]  space-y-5  " style={desstyle}>
                <div className="flex gap-3 ">
                  <div className="pt-2  ">
                  <VscCircleFilled size={16} />
                  </div>
                 
                  Collected and reviewed all relevant documentation, including
                  whitepaper, technical specifications, and design documents.
                </div>
                <div className="flex gap-3 ">
                  <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Obtained a clear understanding of the CDP platform&apos;s
                  functionality, economic model, and intended user interactions.
                </div>
                <div className="flex gap-3 ">
                <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Discussed client concerns and specific areas of focus for the
                  audit.
                </div>
              </div> 
            </div>
            <div className="space-y-8  ">
              <h1 style={subtitlestyle}>2. Manual Code Review:</h1>
              <div  className="lg:w-[92%] xl:w-[74%] space-y-5  " style={desstyle}>
                <div className="flex gap-3 ">
                <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Conducted a line-by-line review of the smart contract code,
                  focusing on:
                </div>
                <div  className=" pl-4 md:pl-12">
                  <div className="flex gap-3 ">
                  <div className="pt-2">< VscCircle size={16} /></div>
                    Vulnerability identification: Searching for known
                    vulnerabilities like reentrancy, front-running, integer
                    overflows, and access control issues etc.
                  </div>
                  <div className="flex gap-3 ">
                  <div className="pt-2">< VscCircle size={16} /></div>
                    Logic flaws: Identifying inconsistencies or unintended
                    behaviors in the code logic.
                  </div>
                  <div className="flex gap-3 ">
                  <div className="pt-2">< VscCircle size={16} /></div> Tokenomics correctness: Verifying if
                    the code accurately implements the intended economic model
                    and token distribution mechanisms.
                  </div>
                  <div className="flex gap-3 ">
                  <div className="pt-2">< VscCircle size={16} /></div>Solidity best practices: Compliance
                    with secure coding standards and adherence to established
                    guidelines.
                  </div>
                </div> 
              </div> 
            </div>
            <div className="space-y-8  ">
              <h1 style={subtitlestyle}>3. Functional Testing:</h1>
              <div  className="lg:w-[92%] xl:w-[78%] space-y-5  " style={desstyle}>
                <div className="flex gap-3 ">
                  <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Developed and executed a comprehensive set of test cases
                  covering various user interactions and edge cases.
                </div>
                <div className="flex gap-3 ">
                  <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Simulated different deposit, claim, and referral scenarios to
                  assess functionality and uncover potential exploits.
                </div>
                <div className="flex gap-3 ">
                <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Focused on scenarios identified during the manual review and
                  client concerns (e.g., infinite minting, reward calculation
                  errors).
                </div>
                <div className="flex gap-3 ">
                <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Leveraged tools like Hardhat and Ganache to deploy and test
                  the smart contract locally.
                </div>
              </div> 
            </div>
            <div className="space-y-8  ">
              <h1 style={subtitlestyle}>4. Automated Testing:</h1>
              <div  className=" lg:w-[92%] xl:w-[78%] space-y-5  " style={desstyle}>
                <div className="flex gap-3 ">
                  <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Employed static analysis tools like Slither to identify
                  vulnerabilities through automated code scanning.
                </div>
                <div className="flex gap-3 ">
                  <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Utilized symbolic execution tools like Mythril to explore
                  various code execution paths and uncover potential attack
                  vectors.
                </div>
                <div className="flex gap-3 ">
                <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Integrated unit tests are written by the CDP team to verify
                  specific contract functions and their behaviour.
                </div>
              </div> 
            </div>
            <div className="space-y-8  ">
              <h1 style={subtitlestyle}>5. Reporting & Remediation:</h1>
              <div  className=" lg:w-[92%] xl:w-[78%] space-y-5  " style={desstyle}>
                <div className="flex gap-3 ">
                  <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Prepared a detailed report outlining all identified
                  vulnerabilities, categorized by severity and potential impact.{" "}
                </div>
                <div className="flex gap-3 ">
                  <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Provided clear recommendations for fixing each vulnerability,
                  including code snippets and best practices.
                </div>
                <div className="flex gap-3 ">
                <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Collaborated with the CDP team to prioritize and address the
                  identified issues.
                </div>
                <div className="flex gap-3 ">
                <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Conducted additional verification testing after vulnerability
                  fixes were implemented.
                </div>
              </div> 
            </div>
            <h1 className="lg:w-[92%] xl:w-[60%] " style={titlestyle}>
              QuillAudits&apos; Strategic Approach to CDP Security Audits
            </h1>
            <p className="lg:w-[92%] xl:w-[72%] " style={desstyle}>
              We prioritize threat modeling based on platform-specific risks.
              Security-first, we identify and mitigate vulnerabilities beyond
              functionality testing. Using white-box and black-box tests, we
              conduct thorough vulnerability assessments. Maintaining
              transparency, we communicate openly with the CDP team. Emphasizing
              clarity, we present actionable insights for efficient issue
              resolution.
            </p>
            <h1 className="lg:w-[92%] xl:w-[60%] " style={titlestyle}>
              Comprehensive Audit Discoveries and Remediation Strategies
            </h1>
            <p className="lg:w-[92%] xl:w-[60%]  " style={desstyle}>
              {" "}
              Throughout the audit process, we unearthed a total of 33 issues,
              spanning from minor concerns to critical vulnerabilities. Among
              these, some of the critical issues identified were: Here&apos;s how we
              remediated them :
            </p>
            <div className="space-y-5 ">
              <div>
                <h2 style={{ ...desstyle, fontWeight: 600, color: "#00000A" }}>
                  1. Unauthorized Claim/Compound:
                </h2>

                <div >
                  <div style={desstyle} className="lg:w-[92%] xl:w-[70%] flex gap-3 ">
                    <p className=" ">a.</p> Users could claim/compound a
                    substantial amount without making a deposit or waiting for
                    the stipulated time.
                  </div>
                </div> 
              </div>
              <div>
                <h2 style={{ ...desstyle, fontWeight: 600, color: "#00000A" }}>
                  2. Precision Loss in mintCDP():
                </h2>

                <div >
                  <div style={desstyle} className="lg:w-[92%] xl:w-[70%] flex gap-3 ">
                    <p className=" ">a.</p> Precision loss and unscaled values
                    were identified while calculating rewardPerShare in the
                    mintCDP() function.
                  </div>
                </div> 
              </div>
              <div>
                <h2 style={{ ...desstyle, fontWeight: 600, color: "#00000A" }}>
                  3. Multiplication Accuracy:
                </h2>

                <div >
                  <div style={desstyle} className="lg:w-[92%] xl:w-[70%] flex gap-3 ">
                    <p className=" ">a.</p> Multiplication operations were prone
                    to providing incorrect answers due to unscaled values,
                    posing a potential risk to accurate calculations.
                  </div>
                </div> 
              </div>
              <div>
                <h2 style={{ ...desstyle, fontWeight: 600, color: "#00000A" }}>
                  4. Incorrect Share Allocation:
                </h2>

                <div >
                  <div style={desstyle} className="lg:w-[92%] xl:w-[70%] flex gap-3 ">
                    <p className=" ">a.</p> The protocol was allocating shares
                    for all days, even when there were no corresponding
                    deposits, leading to inefficient use of resources.
                  </div>
                </div> 
              </div>
              <div>
                <h2 style={{ ...desstyle, fontWeight: 600, color: "#00000A" }}>
                  5. Logic Error in Referral Handling:
                </h2>

                <div >
                  <div style={desstyle} className="lg:w-[92%] xl:w-[70%] flex gap-3 ">
                    <p className=" ">a.</p> A logic error resulted in users
                    always having their user.referral set to address(0), which
                    could be exploited to trick the referral system
                  </div>
                </div> 
              </div>
              <div>
                <h2 style={{ ...desstyle, fontWeight: 600, color: "#00000A" }}>
                  6. Referral Exploitation:
                </h2>

                <div >
                  <div style={desstyle} className="lg:w-[92%] xl:w-[70%] flex gap-3 ">
                    <p className=" ">a.</p> Users could exploit the referral
                    system to extract more CDP from the protocol, undermining
                    its integrity.
                  </div>
                </div> 
              </div>
            </div>
            <div className="space-y-8  ">
              <h1 style={titlestyle}> Remediation & Impact:</h1>
              <p style={desstyle} className="lg:w-[92%] xl:w-[73%] ">
                All identified vulnerabilities were addressed by the CDP team,
                significantly enhancing the smart contract&apos;s security posture.
                Key improvements include
              </p>
              <div  className=" lg:w-[92%] xl:w-[78%] space-y-5  " style={desstyle}>
                <div className="flex gap-3 ">
                  <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Implementation of reentrancy protection mechanisms.
                </div>
                <div className="flex gap-3 ">
                  <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Accurate handling of decimal values using established
                  libraries or best practices.
                </div>
                <div className="flex gap-3 ">
                  <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Revised calculations with proper scaling factors
                </div>{" "}
                <div className="flex gap-3 ">
                  <div className="pt-2"><VscCircleFilled size={16} /></div>
                  Fixing logic errors to ensure deposits and waiting periods are
                  enforced.
                </div>
                <div className="flex gap-3 ">
                  <div className="pt-2 "><VscCircleFilled size={16} /></div>
                  Addressing referral system vulnerabilities to prevent abuse.
                </div>
              </div> 
            </div>
            <div className="md:w-11/12 lg:w-10/12 xl:w-9/12 ">
              <p style={{ ...desstyle, fontWeight: 600, color: "#00000A" }}>
                Embed this tweet :-
                <span
                  style={{ ...desstyle, fontWeight: 600, color: "#204ECF" }}
                >
                  https://x.com/CarpeDiemCDP/ status/1742906560794296402?s=20
                </span>
              </p>
            </div>
            <p style={desstyle} className="lg:w-[92%] xl:w-[73%] ">
              CDP smart contract audit revealed and fixed critical
              vulnerabilities, safeguarding funds and ensuring platform
              stability. This underscores the need for proactive security in
              blockchain projects, crucial for financial asset management.
              Through audits and issue resolution, CDP reinforces platform
              security, bolstering user trust.
            </p>
            <div className="md:w-[600px] h-[420px] feed-shadow   relative">
              <Image
                className="absolute left-4 top-4"
                src={"/comma1.svg"}
                alt="commaImage"
                width={32}
                height={26}
              />
              <div className="h-[160px] pt-16 rounded-t-md pl-[7%] md:pl-16 card-grad">
                <span className="font-[jost] font-semibold text-[24px] md:text-[28px] leading-[42px] text-[#FFFFFF] ">
                  Sally Radley
                </span>
                <h2 className="font-[jost] font-normal text-[19px] leading-[27px] text-[#FFFFFF] ">
                  WebGFi - CEO
                </h2>
              </div>
              <Image
                className="absolute w-[160px] h-[160px] md:h-[180px] md:w-[180px] top-14 right-2 md:right-10 md:top-8 "
                src={"/img33.svg"}
                alt="commaImage"
              
                width={180}
                height={180}
              />
              <div className="border h-[260px] pl-2 md:pl-16  space-y-5 pt-4 ">
                <div className=" ">
                  <Image
                    src={"/5star.svg"}
                    alt="startimage"
                    className="w-[150px] md:w-[170px] "
                    width={170}
                    height={29}
                  />
                </div>
                <p className="font-[jost] font-[400] text-[16px] leading-[24px] md:w-[80%] ">
                  “It felt like the auditing team was available within a short
                  timeframe, which was excellent. The auditing process looked
                  thorough, and I really appreciate the fact that you took time
                  to investigate GAS optimizations.”
                </p>
              </div>

              <Image
                className="absolute right-4 bottom-4 "
                src={"/comma2.svg"}
                alt="commaImage"
                width={32}
                height={26}
              />
            </div>
          </div>
          <div className="hidden lg:block ">
            <div className="w-[342px] h-[150px] box-grad mt-16 rounded-md pt-[10px] pl-6">
              <span className="font-[Inter] font-normal text-[14px] leading-[21px] text-[#808080] ">
                Headquarters
              </span>
              <p className=" font-[Inter] font-medium text-[16px] leading-[21px] text-[#00000A] ">
                Switzerland
              </p>
              <span className="font-[Inter] font-normal text-[14px] leading-[21px] text-[#808080] ">
                Chain
              </span>
              <p className=" font-[Inter] font-medium text-[16px] leading-[21px] text-[#00000A] ">
                Pulse Blockchain
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
