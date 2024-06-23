// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
import Image from "next/image";
import group from "@/public/images/Group 237724.png"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
    <div>
        <Image src={group} alt="hero" className="w-full animate-custom-bounce" />
    </div>
    <p className="text-[#323232] justify-center items-center sm:text-xl text-sm max-w-[800px] text-center">
        Empower creators and enjoy exclusive content through seamless cryptocurrency paymemts.
    </p>
    </div>
  );
};

export default HeroSection;
