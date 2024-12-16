import Image from "next/image";
import React from "react";
import { MdPerson2 } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";




export default function Blog(){
    return(
<div>
   <div className="text py-24 flex items-center justify-center "> 
          
    <Image
          src="/images/Shop.png"
          alt="shop Bannre"
          width={1550}
         height={802}
            
       />
     
        <div className="absolute">
            <div className="logo h-14 w-16 text-2xl font-bold text-black relative flex mt-4">
                                <Image src="/images/logo.png" width={145} height={21} alt="Picture" />
                            </div>
          <h3 className="font-bold text-2xl">Blog</h3>
          <p className="absolute -ml-6 font-semibold">Home</p>
          <Image
          src="/images/arrow.png"
       alt="next"
          width={7}
         height={6}
         className="ml-8 mt-2"
        
       /><p className="absolute pl-12 -mt-5 mr-3 font-light">Blog</p>
         
        </div>
        </div>
<div className="grid grid-cols-4 ">
<div className="col-span-3">
          <Image
          src="/images/blogp1.jpg"
       alt="next"
          width={900}
         height={6}
         className="ml-16 "
        
       />
       <div className="text-custom-footergrey ml-16 text-base mt-2 flex items-start"><MdPerson2 />
       <p className="-mt-1">Admin</p>
       </div>


       <div className="text-custom-footergrey text-sm flex items-start ml-40 -mt-5">
<FaCalendar /><p>14 Oct 2022</p>
       </div>
       <div className="text-custom-footergrey flex items-start ml-72 -mt-5"><FaTag /><p className="-mt-1">Wood</p></div>
       <h3 className="text-2xl ml-16 mt-6 font-semibold">Going all-in with millennial design</h3>
       <p className="text-custom-footergrey ml-16 mt-5 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore mag<br />na aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Mo<br />rbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie <br /> a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim crastin<br />cidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
       <button className="underline mt-5 ml-16">Read More</button>


       <Image
          src="/images/bolgp2.png"
       alt="next"
          width={900}
         height={6}
         className="ml-16 h-[510px] mt-14 "
        
       />
              <div className="text-custom-footergrey ml-16 text-base mt-2 flex items-start"><MdPerson2 />
       <p className="-mt-1">Admin</p>
       </div>


       <div className="text-custom-footergrey text-sm flex items-start ml-40 -mt-5">
<FaCalendar /><p>14 Oct 2022</p>
       </div>
       <div className="text-custom-footergrey flex items-start ml-72 -mt-5"><FaTag /><p className="-mt-1">Handmade</p></div>
       <h3 className="text-2xl ml-16 mt-6 font-semibold">Exploring new ways of decorating</h3>
       <p className="text-custom-footergrey ml-16 mt-5 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore mag<br />na aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Mo<br />rbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie <br /> a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim crastin<br />cidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
       <button className="underline mt-5 ml-16">Read More</button>



       <Image
          src="/images/blogp3.png"
       alt="next"
          width={900}
         height={6}
         className="ml-16 mt-14"
        
       />
       <div className="text-custom-footergrey ml-16 text-base mt-2 flex items-start"><MdPerson2 />
       <p className="-mt-1">Admin</p>
       </div>


       <div className="text-custom-footergrey text-sm flex items-start ml-40 -mt-5">
<FaCalendar /><p>14 Oct 2022</p>
       </div>
       <div className="text-custom-footergrey flex items-start ml-72 -mt-5"><FaTag /><p className="-mt-1">Wood</p></div>
       <h3 className="text-2xl ml-16 mt-6 font-semibold">Handmade pieces that took time to make</h3>
       <p className="text-custom-footergrey ml-16 mt-5 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore mag<br />na aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Mo<br />rbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie <br /> a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim crastin<br />cidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
       
       <button className="underline mt-5 ml-16">Read More</button></div>

       <div className="col-span-1 mr-32">
<div className="border border-custom-footergrey text-2xl flex justify-end rounded-md ">
<IoIosSearch />
</div>
<h3 className="font-semibold text-2xl mt-10">Categories</h3>
<div className="flex flex-col space-y-6 mt-8">
          <span className="text-custom-footergrey">Crafts</span>
          <span className=" text-custom-footergrey">Design</span>
          <span className=" text-custom-footergrey">Handmade</span>
          <span className=" text-custom-footergrey">Interior</span>
          <span className=" text-custom-footergrey">Wood</span>
         </div> 
         <div className="flex flex-col space-y-6 ml-[230px] -mt-[220px]">
          <span className="text-custom-footergrey">2</span>
          <span className=" text-custom-footergrey">1</span>
          <span className=" text-custom-footergrey">7</span>
          <span className=" text-custom-footergrey">6</span>
          <span className=" text-custom-footergrey">3</span>
         </div> 
         
         
         <h3 className="text-2xl font-semibold mt-24">Recent Posts</h3>
         <Image
          src="/images/recentp1.png"
       alt="next"
          width={200}
         height={6}
         className="mt-5"
        
       />
       
       <Image
          src="/images/recentp2.png"
       alt="next"
          width={230}
         height={6}
         className="mt-5"
        
       /> <Image
       src="/images/recentp3.png"
    alt="next"
       width={230}
      height={6}
      className="mt-5"
     
    /> <Image
    src="/images/recentp4.png"
 alt="next"
    width={200}
   height={6}
   className="mt-5"
  
 /> <Image
 src="/images/recentp5.png"
alt="next"
 width={200}
height={6}
className="mt-5"

/></div></div>




       <div className="flex items-center justify-center">
<button className="bg-custom-yellow rounded-md p-3 pl-4 pr-4"> 1</button>
<button className="bg-custom-shopbiscuity rounded-md p-3 pl-4 pr-4 m-5">2</button>
<button className="bg-custom-shopbiscuity rounded-md p-3 pl-4 pr-4 m-4">3</button>
<button className="bg-custom-shopbiscuity rounded-md p-3 pl-4 pr-4 m-4">Next</button>
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