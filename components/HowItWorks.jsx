
import React from 'react'
import Image from 'next/image'
import connect from "@/public/images/Connect wallet.png"
import creators from "@/public/images/creators.png"
import exclusive from "@/public/images/exclusive perks.png"
import support from "@/public/images/support coffee.png"

const HowItWorks = () => {
  return (
    <div className='container justify-center items-center text-center'>
      <div className="border p-5 rounded-2xl  bg-[#94420612] mt-10">
        <h1 className='justify-center text-center text-2xl text-gray-[#0E0600] my-8'>HowItWorks</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 ">
      <div className="rounded-xl border-gray-700  border justify-center items-center flex flex-col max-w-[400px]">
        <div className='flex flex-row gap-3 items-center text-left justify-start w-full px-5 py-2'>
        <span className="rounded-full bg-[#562B0C] text-white flex items-center justify-center w-8 h-8">1</span>
            <h2 className='text-[#0E0600] text-xl'>Connect Wallet</h2>
        </div>
           <Image src={connect} alt='connect' className='w-[300px] p-3'/>
      </div>
      <div className="rounded-xl border-gray-700  border justify-center items-center flex flex-col max-w-[400px]">
      <div className='flex flex-row gap-3 items-center text-left justify-start w-full px-5 py-2'>
        <span className="rounded-full bg-[#562B0C] text-white flex items-center justify-center w-8 h-8">2</span>
            <h2 className='text-[#0E0600] text-xl'>Discover creators</h2>
        </div>
        <Image src={creators} alt='connect' className='w-[300px] p-3'/>
      </div>
      <div className="rounded-xl border-gray-700  border justify-center items-center flex flex-col max-w-[400px]">
      <div className='flex flex-row gap-3 items-center text-left justify-start w-full px-5 py-2'>
        <span className="rounded-full bg-[#562B0C] text-white flex items-center justify-center w-8 h-8">3</span>
            <h2 className='text-[#0E0600] text-xl'>Support with crypto.</h2>
        </div>
        <Image src={support} alt='connect' className='w-[300px] p-3'/>
      </div>
      <div className="rounded-xl border-gray-700  border justify-center items-center flex flex-col max-w-[400px]">
      <div className='flex flex-row gap-3 items-center text-left justify-start w-full px-5 py-2'>
        <span className="rounded-full bg-[#562B0C] text-white flex items-center justify-center w-8 h-8">4</span>
            <h2 className='text-[#0E0600] text-xl'>Enjoy Exclusive Perks</h2>
        </div>
        <Image src={exclusive} alt='connect' className='w-[300px] p-3'/>
      </div>
    </div>
      </div>
    </div>
  )
}

export default HowItWorks
