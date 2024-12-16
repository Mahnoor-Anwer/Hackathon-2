import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";






const Navbar: React.FC = () => {
  return (
    <header className=" w-full fixed z-10 bg-white shadow-sm mb-20">
       
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
       
        
        <div className="logo h-14 w-16 text-2xl font-bold text-black relative flex"><Image src="/images/logo.png" width={105} height={21} alt="Picture" />
       <div className="mt-3"> Furniro</div>
        
        </div>
        <nav className="flex space-x-6">
             <a href="/" className="text-gray-600 hover:text-black">Home</a>
             <a href="/Shop" className="text-gray-600 hover:text-black">Shop</a>
             <a href="/Blog" className="text-gray-600 hover:text-black">Blog</a>
             <a href="/contact" className="text-gray-600 hover:text-black">Contact</a>
          </nav>
       
       
   
        <div className="flex space-x-4 text-gray-600">
             <button className="hover:text-black">
             <FaRegUser />
           </button>
             <button className="hover:text-black">
             <IoSearch />

             </button>
             <button className="hover:text-black">
             <FaRegHeart />
             </button>
             <a href="/cart"><button className="hover:text-black ">
             <AiOutlineShoppingCart />
             </button></a>
          </div>
        
        </div>
      
    </header>
  );
};

export default Navbar;


// export default function Navbar() {
    // return (
    //   <header className="bg-white shadow-sm">
    //     <div className="container mx-auto flex items-center justify-between py-4 px-6">
    //       {/* Logo */}
     
          
           {/* Navigation Links */}
          
    //       {/* Icons */}
        
    //     </div>
    //   </header>
    // );

