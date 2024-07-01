"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from '../../config';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Slideshow from './slide';
import logo from "@/public/images/Main logo.png";

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const getUsernameData = async (username: string) => {
    try {
      let { data: Creators, error } = await supabase
        .from('Creators')
        .select('username')
        .eq('username', username);

      if (error) {
        throw error;
      }

      if (Creators && Creators.length > 0) {
        toast.info('Username already exists, please sign in');
        return null;
      } else {
        toast.success('Username is available');
        return Creators;
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error fetching data');
      return null;
    }
  };

  const handleFetchData = async () => {
    const data = await getUsernameData(username);
    if (data) {
      router.push(`/upload?username=${username}`);
    }
  };

  return (
    <div className="flex bg-[#1E0D00] h-screen w-screen">
      <div className="flex flex-wrap justify-between h-full w-full">
        <div className="lg:my-3 w-full lg:w-[40%] xl:w-[40%]">
          <Image src={logo} width={203} height={51} alt="Logo" className="mt-[50px] ml-[50px]" />
          <div className="ml-[50px] text-white font-[500] text-[30px] mt-[40px] lg:mt-[30px] xl:mt-[50px]">
            Welcome to Coffee Cupa
          </div>
          <div className="text-[16px] font-[300] text-white ml-[50px] mt-3">
            Create your account or sign in to get started
          </div>
          <div className="mt-[10px] 2xl:mt-[50px]">
            <Slideshow />
          </div>
        </div>

        <div className="w-full lg:w-[60%] xl:w-[60%] bg-white lg:rounded-l-[40px] rounded-t-[20px]">
          <div className="absolute top-0 right-0 mt-10 mr-10">
            <span>Already have an account? <p className="inline text-[#E68640] underline cursor-pointer">Sign In</p></span>
          </div>
          <div className="mt-[250px] ml-[50px]">
            <p className="text-[#0E0600] font-[500] text-[30px]">Create your account</p>
            <p className="text-[#323232] font-[300] text-[15px]">Create a username for your page</p>
            <div className="w-[400px] rounded-[12px] h-[55px] bg-[#F9F9F9] flex items-center my-auto hover:border-[#562B0C] mt-2">
              <div className="flex ml-[20px]">
                <Image src="/images/user.png" width={20} height={20} alt="User" />
                <p className="ml-3 text-black">cofeecupa.com/</p>
                <input
                  type="text"
                  className="bg-[#F9F9F9]"
                  placeholder="your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center text-white w-[150px] h-[60px] rounded-[100px] mt-3 bg-[#562B0C] cursor-pointer">
              <p className="mx-auto text-[16px]" onClick={handleFetchData}>
                Sign Up
              </p>
            </div>
          </div>
          <footer className="text-center p-4 fixed bottom-0 w-[60%]">
            <div>
              By continuing, you agree to the <a href="/terms" className="text-gray-500 underline">terms of service</a> and <a href="/privacy" className="text-gray-500 underline">privacy policy</a>.
            </div>
          </footer>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignupPage;


