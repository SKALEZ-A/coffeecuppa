"use client";
import { useState } from "react";
import Header from "@/components/dash/Header";
import HeaderMobile from "@/components/dash/Header-mobile";
import MarginWidthWrapper from "@/components/dash/Margin-with-wrapper";
import PageWrapper from "@/components/dash/Page-wrapper";
import SideNav from "@/components/dash/Side-nav";
// import Page from "./Page_content";

const page = () => {
  const [selected, setSelected] = useState("Home"); // Default selected option
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const options = ["Home", "School", "House", "Office"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1">
        <MarginWidthWrapper>
          <Header />
          <HeaderMobile />
          <PageWrapper>
            {/* main page contents */}
            <div className="">
              <div className="flex gap-10 flex-col">
                <span className="font-bold text-2xl">Settings</span>
                <div className=" w-full rounded-lg bg-white shadow-lg text-black justify-between p-8">
                  <div>
                    <div className="border-b my-4">
                      <h1>Payment currency</h1>
                      <span>Your supporters will pay in this currency.</span>
                      {/* dropdown options */}
                      <div className="flex flex-col items-center mt-10 w-full">
                        <input
                          type="text"
                          value={selected}
                          readOnly
                          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility on input click
                          className="mb-2 p-2 border border-gray-300 rounded cursor-pointer w-full"
                        />
                        {isOpen && (
                          <div className="relative w-full">
                            <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded shadow-lg">
                              {options.map((option) => (
                                <div
                                  key={option}
                                  onClick={() => handleSelect(option)}
                                  className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                                >
                                  {option}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="border-b my-4">
                      <h1>Cover credit card fees</h1>
                      <p>
                        If turned off, your fans will incur the credit card fees
                        associated with their payments.
                      </p>
                    </div>
                    <div className="border-b my-4">
                      <h1>My page link</h1>
                      <input
                        type="text"
                        value="cofeecupa.com/username"
                        readOnly
                        className="mb-2 p-2 border border-gray-300 rounded cursor-pointer w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className=" w-full h-64 rounded-lg bg-white shadow-lg p-8 justify-center items-center"></div>
              </div>
            </div>
          </PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
};

export default page;
