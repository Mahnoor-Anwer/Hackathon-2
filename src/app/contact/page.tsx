import Image from "next/image";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";



export default function contact() {
    return (
      <div>
             
                         
                   <div className="text py-24 flex items-center justify-center "> 
                          
                          <Image
                          src="/images/Shop.png"
                          alt="shop Bannre"
                          width={1550}
                         height={802}
                            
                       />
                     
                        <div className="absolute">
                           
                                   <div className="logo h-14 w-16 text-2xl font-bold text-black relative flex ml-9">
                                       <Image src="/images/logo.png" width={165} height={21} alt="Picture" />
                                   </div>
                          <h3 className="font-bold text-4xl">Contact</h3>
                          <p className="absolute ml-4 font-semibold">Home</p>
                          <Image
                          src="/images/arrow.png"
                       alt="next"
                          width={7}
                         height={6}
                         className="ml-[70px] mt-2"
                        
                       /><p className="absolute pl-20 -mt-5 mr-3 font-light">Contact</p>
                         
                        </div>
        </div>
        <h3 className="text-2xl font-semibold flex items-center justify-center -mt-8 mb-4">Get In Touch With Us</h3>
        <p className="text-custom-footergrey flex items-center justify-center text-base">For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      <div className="grid grid-cols-2 gap-8">
  
        <div className="ml-80 mt-8">
        <div className="">
         <div className=" -ml-10 text-2xl translate-y-4"> <IoLocationSharp /></div>
<h3 className="text-2xl">Address</h3>
<p>236 5th SE Avenue, New <br /> York NY10000, United <br />States</p>
<div className="mt-8"> <div className="-ml-10 text-2xl translate-y-6"><FaPhoneAlt  /></div>
<h3 className="text-2xl">Phone</h3>
<p>Mobile: +(84) 546-6789 <br />
Hotline: +(84) 456-6789</p></div>
<div className="mt-8">
<div className="-ml-10 text-2xl translate-y-5"><MdAccessTimeFilled /></div>
  <h3 className="text-2xl">Working Time</h3>
  <p>Monday-Friday: 9:00 - <br />22:00
  Saturday-Sunday: 9:00 - <br /> 21:00</p></div>
  </div>

  </div>  <form className="space-y-6 mr-72 -ml-20 mt-8">
        <div>
    <label htmlFor="name" className="block mb-2 text-[16px] font-normal">Your Name</label>
    <input 
    id="name"
    placeholder="abc"
    type="text" 
    className="w-full border rounded-md p-4 text-[16px]"/>
  </div>

  <div>
    <label htmlFor="email" className="block mb-2 text-[16px] font-normal">Email Address</label>
    <input 
    id="email"
    placeholder="Abc@def.com"
    type="email" 
    className="w-full border rounded-md p-4 text-[16px]"/>
  </div>

  <div>
    <label htmlFor="Subject" className="block mb-2 text-[16px] font-normal">Subject</label>
    <input 
    id="subject"
    placeholder="This is an optional"
    type="text" 
    className="w-full border rounded-md p-4 text-[16px]"/>
  </div>

  <div>
    <label htmlFor="message" className="block mb-2 text-[16px] font-normal">Message</label>
    <input 
    id="message"
    placeholder="Hi! i’d like to ask about"
    type="text" 
    className="w-full border rounded-md p-14 text-[16px]"/>
    <button className="bg-custom-yellow text-white pl-8 pr-8 pt-2 pb-2 mt-8">Submit</button>
  </div>

        </form>
        </div>
        <div className="mt-10 ">
        <Image
        src="/images/shopn.png"
        alt=" img"
        width={1570}
        height={500}
        className="h-56"
        /> </div>
        </div>





    );
  }