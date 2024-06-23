import React from "react";
import Image from "next/image";
import image from "@/public/images/Main logo.png";
import mail from "@/public/images/mail.png";
import wallet from "@/public/images/wallet.png";
import Vector from "@/public/images/Vector.png";

const Contact = () => {
  return (
    <div className="min-h-screen mt-32 ">
      <div className="items-center text-center flex flex-col justify-center">
      <h1 className="text-lg sm:text-4xl font-semibold text-gray-700 flex flex-wrap text-center items-center">
  Join the{' '}
  <Image src={image} alt="image" className="h-8 w-32 sm:w-64 sm:h-16 px-1 sm:px-3 inline-block pb-2" />{' '}
  Community.
</h1>
      <p className="text-gray-700 text-[12px] sm:text-sm max-w-[400px] my-6 text-center justify-center items-center flex">
        Sign up to start supporting your favorite creators with crypto and enjoy
        exclusive perks.
      </p>
      </div>
      <div className="contact-form ">
        <div class=" container flex justify-center items-center ">
          {/* <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
          <div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div> */}
          <form class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 border-gray-300 border sm:w-[550px]">
            <div class="space-y-4">
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <Image src={Vector} alt="mail" className="w-8"/>
              <input
                type="text"
                placeholder="Your twitter / X handle"
                class="block text-sm py-3 px-4 rounded-lg w-full  outline-[#9A7440]"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <Image src={mail} alt="mail" className="w-8"/>
              <input
                type="email"
                placeholder="Your Email Address"
                class="block text-sm py-3 px-4 rounded-lg w-full outline-[#9A7440]"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <Image src={wallet} alt="mail" className="w-8"/>
              <input
                type="text"
                placeholder="Your wallet address"
                class="block text-sm py-3 px-4 rounded-lg w-full  outline-[#9A7440]"
              />
            </div>
            </div>
            <div class="text-center mt-6">
              <button class="w-full py-2 text-sm sm:text-lg text-white bg-[#562B0C] rounded-full hover:bg-[#7c3d11] transition-all">
                Join community
              </button>
            </div>
          </form>
          {/* <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
          <div class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
