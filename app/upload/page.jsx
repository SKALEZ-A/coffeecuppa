"use client";
import { useState } from "react";
import Image from "next/image";
import image from "@/public/images/bi--image.png";
import avatar2 from "@/public/images/avatar2.png";
import logo from "@/public/images/Main logo.png"

const page = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <>
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Image src={logo} alt="Logo" className="h-12 inline" />
        </div>
        <button className="text-gray-800 border px-4 py-2 rounded-full">
          Log Out
        </button>
      </div>
    </nav>
      <h1 className="pt-8 block text-center text-2xl font-semibold">
        Complete Your Page
      </h1>
    <div className=" mt-16 flex justify-center items-center ">
      <div className="flex flex-col md:flex-row  bg-white rounded-2xl shadow-lg z-20 border-gray-300 border gap-5 p-5 justify-center items-center">
        <div className="flex-1 h-64  container">
          <div className="flex flex-col items-center mt-10 justify-center">
            <div className="relative">
              <Image
                src={selectedImage || avatar2}
                alt="Avatar"
                className="w-40 h-40 rounded-full object-cover mb-4"
                width={36}
                height={36}
              />
            </div>
            <div className="max-w-60 p-5 container">
              <div className="relative flex items-center border border-gray-700 rounded-full px-3 py-2 justify-center cursor-pointer">
                <Image src={image} alt="mail" className="w-6" />
                <span className="text-[11px] py-2 px-4">
                  Upload Profile Picture
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form flex-1 ">
          <div className=" container flex justify-center items-center ">
            <form className="py-12 sm:w-[400px]">
              <div className="space-y-4">
                    <p className="text-sm font-light text-gray-800">Full name</p>
                <div className="flex items-center border border-gray-300 rounded px-3 py-1">
                  <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="block text-sm py-3 px-4 rounded-lg w-full  outline-[#9A7440]"
                  />
                  </div>
                </div>
                    <p className="text-sm font-light text-gray-800">Bio</p>
                <div className="flex items-center border border-gray-300 rounded px-3 py-1">
                  <div>
                  <input
                    type="text"
                    placeholder="tell us about yourself"
                    className="block text-sm py-3 px-4 rounded-lg w-full outline-[#9A7440]"
                  />
                  </div>
                </div>
                    <p className="text-sm font-light text-gray-800">Website or social link</p>
                <div className="flex items-center border border-gray-300 rounded px-3 py-1">
                  <div>
                  <input
                    type="text"
                    placeholder="https://"
                    className="block text-sm py-3 px-4 rounded-lg w-full  outline-[#9A7440]"
                  />
                  </div>
                </div>
              </div>
              <div className="text-start mt-6">
                <button className="items-start justify-start p-3 text-[10px] sm:text-lg text-white bg-[#562B0C] rounded-full hover:bg-[#7c3d11] transition-all">
                  Continue
                </button>
              </div>
            </form>
            {/* <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
          <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default page;
