
import "@/app/globals.css"

// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/dash/Header';
import HeaderMobile from '@/components/dash/Header-mobile';
import MarginWidthWrapper from '@/components/dash/Margin-with-wrapper';
import PageWrapper from '@/components/dash/Page-wrapper';
import SideNav from '@/components/dash/Side-nav';
import Page from "./Page_content";
import Image from 'next/image'
import Slideshow from './slide'



// export const metadata: Metadata = {
//   title: 'Side Nav w/ Sub Menu',
//   description: 'Generated by create next app',
// };

const page = () => {




  return (
    
      
        <div className="flex bg-[#1E0D00] h-screen w-screen">
          <div className="flex flex-wrap  justify-between h-full w-full">
      <div className="lg:my-3 w-full lg:w-[35%] xl:w-[35%]">
        <Image src="/images/logoimage.png" width={203} height={51} alt="Logo" className="mt-[50px] ml-[50px]" />
          <div className="ml-[50px] text-white font-[500] text-[30px] mt-[40px] xl:mt-[50px] ">
          Welcome to Coffee Cupa
          </div>
          <div className="text-[16px] font-[300] text-white ml-[50px] mt-3">
            Create your account or sign in to get started
          </div>
          <div>
          <Slideshow/>
          </div>
        </div>
        
      <div className="w-full lg:w-[65%] xl:w-[65%] bg-white lg:rounded-l-[40px] rounded-t-[20px]">
      BBBBBB

      <Slideshow/>
      </div>
      </div>
        </div>
      
    
  );
}
export default page