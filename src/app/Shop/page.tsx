import Navbar from "../Component/Header/Navbar";
import Image from "next/image";
import React from "react";
import { PiCirclesFourFill } from "react-icons/pi";
import { MdOutlineViewDay } from "react-icons/md";


export default function Shop() {
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
       <h3 className="font-bold text-2xl">Shop</h3>
       <p className="absolute -ml-6 font-semibold">Home</p>
       <Image
       src="/images/arrow.png"
    alt="next"
       width={7}
      height={6}
      className="ml-8 mt-2"
     
    /><p className="absolute pl-12 -mt-5 mr-3 font-light">Shop</p>
      
     </div>
       </div>


       <div className="bg-custom-shopbiscuity w-full h-24  -mt-28 flex items-center justify-center">
       <Image
       src="/images/system-uicons_filtering.png"
    alt="next"
       width={25}
      height={25}
      className="-ml-[100px]"
     
    />
    <p className="ml-2 font-normal">Filter</p>
   <div className="ml-8"> <PiCirclesFourFill /></div>
<div className="ml-8"><MdOutlineViewDay />
</div>
<div className="border-l-2 border-custom-lightgray h-8 ml-8"></div>
<p className="ml-8">Showing 1–16 of 32 results</p>
<p className="ml-[600px]">Show</p>
<div className="bg-white text-custom-whitishgrey p-1 ml-3">16</div>
<p className="ml-8">Sort by</p>
<div className="bg-white text-custom-whitishgrey p-1 ml-3 pr-9 pl-4">Default</div>

       </div>
    
       <a href="/Singleproduct"><div className="productgap">
  
     <div className="bg-custom-whitegrey ">
     


     <Image
         
        src="/images/p1.png"
        alt="Product"
        width={250}
       height={580}
       className="h-64  "
       /> 
      


       <h6 className="font-bold text-2xl ml-3">Syltherine</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Stylish cafe chair</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 2.500.000 <span>
      <h3 className="font-normal text-custom-lightgray line-through  ml-3 text-base">Rp 3.500.000</h3></span></h2>
   </div>

   <div className="p2 bg-custom-whitegrey">


   
         <Image
        src="/images/p2.png"
        alt="Product"
        width={250}
       height={580}
       className="h-64"  
      /> 
       <h6 className="font-bold text-2xl ml-3">Leviosa</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Stylish cafe chair</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 2.500.000 </h2>
    </div> 
    
    
     <div className="p3  bg-custom-whitegrey">
<Image
src="/images/p3.pmg.png"
alt=" img"
width={250}
height={900}
className="h-64"  
/> 
<h6 className="font-bold text-2xl ml-3">Lolito</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Luxury big sofa</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 7.000.000 <span>
      <h3 className="font-normal text-custom-lightgray line-through  ml-3 text-base">Rp 14.000.000</h3></span></h2>
</div>



<div className="p4  bg-custom-whitegrey">
<Image
src="/images/p4.png"
alt=" img"
width={250}
height={900}
className="h-64" 
/> 
<h6 className="font-bold text-2xl ml-3">Respira</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Outdoor bar table and stool</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 500.000 </h2>
</div>
</div></a>

   
<a href="/Singleproduct"><div className="productgap">
  
     <div className="bg-custom-whitegrey ">
     


         <Image
         
        src="/images/p1.png"
        alt="Product"
        width={250}
       height={580}
       className="h-64  "
       /> 
      


       <h6 className="font-bold text-2xl ml-3">Syltherine</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Stylish cafe chair</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 2.500.000 <span>
      <h3 className="font-normal text-custom-lightgray line-through  ml-3 text-base">Rp 3.500.000</h3></span></h2>
   </div>

   <div className="p2 bg-custom-whitegrey">


   
         <Image
        src="/images/p2.png"
        alt="Product"
        width={250}
       height={580}
       className="h-64"  
      /> 
       <h6 className="font-bold text-2xl ml-3">Leviosa</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Stylish cafe chair</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 2.500.000 </h2>
    </div> 
    
    
     <div className="p3  bg-custom-whitegrey">
<Image
src="/images/p3.pmg.png"
alt=" img"
width={250}
height={900}
className="h-64"  
/> 
<h6 className="font-bold text-2xl ml-3">Lolito</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Luxury big sofa</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 7.000.000 <span>
      <h3 className="font-normal text-custom-lightgray line-through  ml-3 text-base">Rp 14.000.000</h3></span></h2>
</div>



<div className="p4  bg-custom-whitegrey">
<Image
src="/images/p4.png"
alt=" img"
width={250}
height={900}
className="h-64" 
/> 
<h6 className="font-bold text-2xl ml-3">Respira</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Outdoor bar table and stool</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 500.000 </h2>
</div>


</div></a>

<a href="/Singleproduct"><div className="productgap">
  
     <div className="bg-custom-whitegrey ">
     


         <Image
         
        src="/images/p1.png"
        alt="Product"
        width={250}
       height={580}
       className="h-64  "
       /> 
      


       <h6 className="font-bold text-2xl ml-3">Syltherine</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Stylish cafe chair</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 2.500.000 <span>
      <h3 className="font-normal text-custom-lightgray line-through  ml-3 text-base">Rp 3.500.000</h3></span></h2>
   </div>

   <div className="p2 bg-custom-whitegrey">


   
         <Image
        src="/images/p2.png"
        alt="Product"
        width={250}
       height={580}
       className="h-64"  
      /> 
       <h6 className="font-bold text-2xl ml-3">Leviosa</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Stylish cafe chair</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 2.500.000 </h2>
    </div> 
    
    
     <div className="p3  bg-custom-whitegrey">
<Image
src="/images/p3.pmg.png"
alt=" img"
width={250}
height={900}
className="h-64"  
/> 
<h6 className="font-bold text-2xl ml-3">Lolito</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Luxury big sofa</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 7.000.000 <span>
      <h3 className="font-normal text-custom-lightgray line-through  ml-3 text-base">Rp 14.000.000</h3></span></h2>
</div>



<div className="p4  bg-custom-whitegrey">
<Image
src="/images/p4.png"
alt=" img"
width={250}
height={900}
className="h-64" 
/> 
<h6 className="font-bold text-2xl ml-3">Respira</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Outdoor bar table and stool</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 500.000 </h2>
</div>


</div></a>

<a href="/Singleproduct"><div className="productgap">
  
     <div className="bg-custom-whitegrey ">
     


         <Image
         
        src="/images/p1.png"
        alt="Product"
        width={250}
       height={580}
       className="h-64  "
       /> 
      


       <h6 className="font-bold text-2xl ml-3">Syltherine</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Stylish cafe chair</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 2.500.000 <span>
      <h3 className="font-normal text-custom-lightgray line-through  ml-3 text-base">Rp 3.500.000</h3></span></h2>
   </div>

   <div className="p2 bg-custom-whitegrey">


   
         <Image
        src="/images/p2.png"
        alt="Product"
        width={250}
       height={580}
       className="h-64"  
      /> 
       <h6 className="font-bold text-2xl ml-3">Leviosa</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Stylish cafe chair</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 2.500.000 </h2>
    </div> 
    
    
     <div className="p3  bg-custom-whitegrey">
<Image
src="/images/p3.pmg.png"
alt=" img"
width={250}
height={900}
className="h-64"  
/> 
<h6 className="font-bold text-2xl ml-3">Lolito</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Luxury big sofa</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 7.000.000 <span>
      <h3 className="font-normal text-custom-lightgray line-through  ml-3 text-base">Rp 14.000.000</h3></span></h2>
</div>



<div className="p4  bg-custom-whitegrey">
<Image
src="/images/p4.png"
alt=" img"
width={250}
height={900}
className="h-64" 
/> 
<h6 className="font-bold text-2xl ml-3 ">Respira</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Outdoor bar table and stool</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 500.000 </h2>
</div>

</div></a>
<div className="flex items-center justify-center">
<button className="bg-custom-yellow rounded-md p-3 pl-4 pr-4"> 1</button>
<button className="bg-custom-shopbiscuity rounded-md p-3 pl-4 pr-4 m-5">2</button>
<button className="bg-custom-shopbiscuity rounded-md p-3 pl-4 pr-4 m-4">3</button>
<button className="bg-custom-shopbiscuity rounded-md p-3 pl-4 pr-4 m-4">Next</button>
</div>
<div className="mt-10 -mb-8">
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