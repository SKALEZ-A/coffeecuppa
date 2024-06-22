// "use client"
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// // import logo from "../assets/logo.png";
// import logo from "@/public/images/mail.png"
// import { navItems } from "./constants";

// const Navbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const toggleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   return (
//     <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
//       <div className="container px-4 mx-auto relative lg:text-sm">
//         <div className="flex justify-between items-center text-black">
//           <div className="flex items-center flex-shrink-0">
//             <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
//             <span className="text-xl tracking-tight">VirtualR</span>
//           </div>
//           <ul className="hidden lg:flex ml-14 space-x-12">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <a href={item.href}>{item.label}</a>
//               </li>
//             ))}
//           </ul>
//           <div className="hidden lg:flex justify-center space-x-12 items-center">
//             <a href="#" className="py-2 px-3 border rounded-md">
//               Sign In
//             </a>
//             <a
//               href="#"
//               className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
//             >
//               Create an account
//             </a>
//           </div>
//           <div className="lg:hidden md:flex flex-col justify-end">
//             <button onClick={toggleNavbar}>
//               {mobileDrawerOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//         {mobileDrawerOpen && (
//           <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
//             <ul>
//               {navItems.map((item, index) => (
//                 <li key={index} className="py-4">
//                   <a href={item.href}>{item.label}</a>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex space-x-6">
//               <a href="#" className="py-2 px-3 border rounded-md">
//                 Sign In
//               </a>
//               <a
//                 href="#"
//                 className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
//               >
//                 Create an account
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "@/public/images/Group.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="sticky backdrop-blur-lg border-b border-neutral-700/80 shadow-lg m-5 rounded-full">
      <div className="antialiased ">
        <div className={` w-full text-gray-700 bg-white ${menuOpen ? "rounded-lg " : "rounded-full" } `}>
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 rounded-full">
            <div className="flex flex-row items-center justify-between p-4">
              <a href="#" className="">
                <Image src={logo} alt='logo' className='w-32 sm:w-40'/>
              </a>
              <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <FaTimes className="w-6 h-6 text-gray-800" />
                ) : (
                  <FaBars className="w-6 h-6 text-gray-800" />
                )}
              </button>
            </div>
            <nav className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${menuOpen ? 'flex' : 'hidden'}`}>
              <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:bg-gray-600 dark:focus:bg-gray-600 focus:text-grey-600 hover:text-gray-600 text-gray-800 md:mt-0 md:ml-4 focus:text-gray-900  focus:outline-none " href="#">How it works</a>
              <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:bg-gray-600 dark:focus:bg-gray-600 focus:text-grey-600 hover:text-gray-600 text-gray-800 md:mt-0 md:ml-4 focus:text-gray-900  focus:outline-none " href="#">Creators</a>
              <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:bg-gray-600 dark:focus:bg-gray-600 focus:text-grey-600 hover:text-gray-600 text-gray-800 md:mt-0 md:ml-4 focus:text-gray-900  focus:outline-none " href="#">Community</a>
              <a className="px-4 py-2 mt-2 text-sm font-semibold  hover:bg-gray-600 dark:focus:bg-gray-600 focus:text-grey-600 hover:text-gray-600 text-white md:mt-0 md:ml-4 focus:text-gray-900  focus:outline-none bg-[#562B0C] rounded-full p-3 " href="#">Get Started</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

