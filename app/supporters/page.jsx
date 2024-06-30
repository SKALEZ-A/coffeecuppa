import "@/app/globals.css";

import Header from "@/components/dash/Header";
import HeaderMobile from "@/components/dash/Header-mobile";
import MarginWidthWrapper from "@/components/dash/Margin-with-wrapper";
import PageWrapper from "@/components/dash/Page-wrapper";
import SideNav from "@/components/dash/Side-nav";

const page = () => {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1">
        <MarginWidthWrapper>
          <Header />
          <HeaderMobile />
          <PageWrapper>
            <div className="flex gap-10 flex-col mt-8">
              <span className="font-bold text-2xl">Supporters</span>
              <div className=" w-full  rounded-xl bg-white shadow-lg p-8 justify-center items-center">
                <div className="container mx-auto p-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-zinc-100 p-4 m-2 flex-1 rounded-lg justify-start gap-5">
                      <h1 className="block font-bold text-3xl py-5">0</h1>
                      <p className="block text-sm font-light">0 Supporters</p>
                    </div>
                    <div className="bg-zinc-100 p-4 m-2 flex-1 rounded-lg justify-start gap-5">
                      <h1 className="block font-bold text-3xl py-5">$0</h1>
                      <p className="block text-sm font-light">Last 30 days</p>
                    </div>
                    <div className="bg-zinc-100 p-4 m-2 flex-1 rounded-lg justify-start gap-5">
                      <h1 className="block font-bold text-3xl py-5">$0</h1>
                      <p className="block text-sm font-light">All Time</p>
                    </div>
                  </div>
                </div>
                <div className=" border border-zinc-200 justify-center items-center w-auto h-auto flex flex-col gap-7 py-7">
                  <p className="text-lg">💔</p>
                  <p className="font-bold">
                    You don't have any supporters yet.
                  </p>
                  <p className="font-light text-sm">
                    Share your page with your audience to get started.
                  </p>
                </div>
              </div>
            </div>
          </PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
};

export default page;
