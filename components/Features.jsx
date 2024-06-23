import React from "react";
import Image from "next/image";
import icon1 from "@/public/images/icon1.png";
import icon2 from "@/public/images/icon2.png";
import icon3 from "@/public/images/icon3.png";
import icon4 from "@/public/images/icon4.png";
import icon5 from "@/public/images/icon5.png";
import nft from "@/public/images/NFT mem.png"
import people from "@/public/images/people.png"


const Features = () => {
  return (
    <div className="container my-12">
      <div className="border p-5 rounded-2xl  bg-[#0E0600] mt-10">
        <h1 className="justify-center text-center text-2xl md:text-3xl text-gray-300 my-8">
          Features
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 w-full">
          <div className=" rounded-xl border-[#ffffff25]  border">
            <div className="flex flex-row gap-3 items-center justify-left px-7 py-2">
              <Image src={icon1} alt="icon" className="h-8 w-8" />
              <h2 className="text-gray-200 text-lg">Secure Payments</h2>
            </div>
            <p
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
              className=" font-extralight text-sm sm:text-[1rem] py-4 px-7 text-start  justify-center"
            >
              All transactions are secured by smart contracts on the blockchain.
            </p>
          </div>
          <div className="rounded-xl border-[#ffffff25]  border">
            <div className="flex flex-row gap-3 items-center justify-left px-7 py-2">
              <Image src={icon2} alt="icon" className="h-8 w-8" />
              <h2 className="text-gray-200 text-lg">Exclusive Contents</h2>
            </div>
            <p
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
              className=" font-extralight text-sm sm:text-[1rem] py-4 px-7 text-start justify-center"
            >
              Supporters get access to unique contents and rewards.
            </p>
          </div>
          <div className="rounded-xl border-[#ffffff25]  border">
            <div className="flex flex-row gap-3 items-center justify-left px-7 py-2">
              <Image src={icon3} alt="icon" className="h-8 w-8" />
              <h2 className="text-gray-200 text-lg">
                Decentralized Governance
              </h2>
            </div>
            <p
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
              className=" font-extralight text-sm sm:text-[1rem] py-4 px-7 text-start justify-center"
            >
              Join our DAO to have a say in the platform's future.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8 sm:mt-16 sm:gap-6 w-full">
          <div className="relative rounded-xl border-[#ffffff25]  border min-h-[180px] ">
            <div className="flex flex-row gap-3 items-center justify-left px-7 py-2 ">
              <Image src={icon4} alt="icon" className="h-8 w-8" />
              <h2 className="text-gray-200 text-lg">NFT Membership</h2>
            </div>
            <p
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
              className=" font-extralight text-sm sm:text-[1rem] py-4 px-7  justify-center text-start"
            >
              Own limited edition <br></br> coffee-mug  NFTs that unlock <br></br>special perks.
            </p>
            <Image 
    src={nft} 
    alt="top right icon" 
    className="absolute -top-4 -right-4 h-36 w-36"
  />
          </div>
          <div className="relative rounded-xl border-[#ffffff25]  border mt-8 sm:mt-0">
            <div className="flex flex-row gap-3 items-center justify-left px-7 py-2">
              <Image src={icon5} alt="icon" className="h-8 w-8" />
              <h2 className="text-gray-200 text-lg">Global Reach</h2>
            </div>
            <p
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
              className=" font-extralight text-sm sm:text-[1rem] py-4 px-7  justify-center text-start"
            >
              Support and get supported <br></br>by a global community.
            </p>
            <Image 
    src={people} 
    alt="top right icon" 
    className="absolute -top-8 -right-6 h-36 w-36"
  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
