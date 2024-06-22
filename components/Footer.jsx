import Image from "next/image";
import coffee from "@/public/images/Group.png"
import bottom from "@/public/images/Bottom icons.png"


const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 px-5 border-neutral-700 w-full">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
       <div>
        <Image src={coffee} alt="image" className="pb-4 w-32 sm:w-40"/>
       </div>
       <div>
        <ul className="flex gap-6 items-center flex-col sm:flex-row">
            <li className="text-sm text-gray-800">About</li>
            <li className="text-sm text-gray-800">Help center</li>
            <li className="text-sm text-gray-800">Privacy</li>
            <li className="text-sm text-gray-800">Terms</li>
        </ul>
       </div>
       <div>
       <Image src={bottom} alt="image" className="w-20 sm:w-32 "/>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
