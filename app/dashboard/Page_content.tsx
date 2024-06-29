import React from "react";

const Page_content = () => {
  return (
    <div>
      <div className="flex gap-10 flex-col">
        <div className=" w-full h-64 rounded-lg bg-[#1E0D00] shadow-lg text-black justify-between p-8">
          <div className="flex flex-row justify-between items-center border-b">
            <div className="flex flex-row gap-5">
            <span className="h-14 w-14 bg-black rounded-full" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-[16px]">Hello User</h1>
                <p className="font-light text-sm">coffeecupa/youremail</p>
              </div>
            </div>
            <div className="justify-end">
              <button className=" p-4 rounded-full text-white font-bold text-sm bg-gray-900">Share page..</button>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-4">
            <h1 className="font-bold text-2xl">Earnings</h1>
            <p className="font-bold text-4xl">$0</p>
            <div className="flex flex-row justify-between">
              <span><span className="h-5 w-5 bg-black rounded-full" ></span>$0 Supporters</span>
              <span> <span className="h-5 w-5 bg-black rounded-full" ></span>$0 Membership</span>
              <span> <span className="h-5 w-5 bg-black rounded-full" ></span>$0 Extras</span>
            </div>
          </div>
        </div>
        <div className=" w-full h-64 rounded-lg bg-white shadow-lg p-8 justify-center items-center">
          <div className=" border border-zinc-200 justify-center items-center w-auto h-auto flex flex-col gap-7 py-7">
            <p className="text-lg">💔</p>
            <p className="font-bold">You don't have any supporters yet.</p>
            <p className="font-light text-sm">Share your page with your audience to get started.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page_content;
