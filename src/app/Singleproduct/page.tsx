import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";


export default function Singleproduct() {
  return (
    <div>
<div className="bg-custom-shopbiscuity w-full h-2  pt-48 flex items-start justify-start">
  <div className="absolute">

       <p className="absolute -mt-14 ml-24 font-normal text-custom-footergrey">Home</p>
       <Image
       src="/images/arrow.png"
    alt="next"
       width={7}
      height={6}
      className=" -mt-12 ml-40"
     
    /><p className="absolute pl-12 -mt-5 mr-3 font-normal text-custom-footergrey ml-36">Shop</p>
     <Image
       src="/images/arrow.png"
    alt="next"
       width={7}
      height={6}
      className="  ml-64 -mt-3"
     
    />
    <div className="border-l-2 border-custom-lightgray h-8 ml-72 -mt-6">
      <p className="ml-6 font-semibold"> Asgaard sofa</p>
    </div>

    </div></div>  
        <div className="grid grid-cols-2 gap-16 ">
        <Image
       src="/images/Asgaardsofa.png"
    alt="next"
       width={700}
      height={600}
      className="  ml-16 mt-8"
     
    />
    <h3 className=" grid grid-rows-9"><p className="font-semibold mt-10 text-4xl">Asgaard Sofa</p>
    <p className="text-custom-footergrey text-2xl mt-2">Rs. 250,000.00</p>
    <Image
       src="/images/starrating.png"
    alt="next"
       width={170}
      height={60}
      className="  -mt-6"
     
    />
    <div className="border-l-2 border-custom-lightgray h-11 ml-48 -mt-28 pt-3"><p className="text-custom-footergrey  ml-6 font-light">5 Customer Review</p></div>
    <p className="-mt-32 text-base font-medium">Setting the bar as one of the loudest speakers in its class, the <br /> Kilburn is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a clear midrange and extended highs for a <br /> sound.
</p>
<p className="text-custom-footergrey -mt-20">Size</p>
<div className="flex items-start justify-start -mt-28">
<button className="bg-custom-yellow rounded-md p-3 pr-5 pl-5 mr-2"> L</button>
<button className="bg-custom-shopbiscuity rounded-md p-3 pl-4 pr-4 mr-2">XL</button>
<button className="bg-custom-shopbiscuity rounded-md p-3  pr-4 ">XS</button>
</div>
<p className="text-custom-footergrey -mt-28">Color</p>
<div className="flex items-start justify-start -mt-36 ">
<button className="bg-purple-400 rounded-full py-4 px-4 mr-3"> </button>
<button className="bg-black rounded-full px-4 py-4 mr-3"></button>
<button className="bg-custom-yellow rounded-full py-4 px-4 "></button>
</div>
<div className="flex items-start justify-start -mt-36 ">
<button className=" space-x-12 h-14 rounded-lg border p-3 mr-5">
  <span>-</span>
  <span>1</span>
  <span>+</span>  </button>
<button className=" border-black  border pl-14 pr-14 rounded-lg h-14 font-semibold mr-5">Add To Cart</button>
<a href="/productcomparison"><button className=" border-black  border pl-14 pr-14 rounded-lg h-14 font-semibold space-x-2 ">
  <span>+</span>
  <span>Compare</span>
</button></a>
</div>
<div className="border-t-2 border-custom-footergrey w-[650px] "></div>
<p className="text-custom-footergrey space-x-14 mt-8"><span>SKU</span>
  <span>:</span>
         SS001
</p>
<p className="text-custom-footergrey space-x-5 mt-4">
  <span>Category</span>
  <span>:</span>
  Sofas
</p>
<p className="text-custom-footergrey space-x-14 mt-4">
  <span>Tags</span>
  <span>:</span>
  Sofa,Chair,Home,Shop
</p>
<p className="text-custom-footergrey space-x-12 mt-4">
  <span>Share</span>
  <span>:</span>
 

</p>
<button className="ml-28 -mt-4"><FaFacebook /></button>
<button className="ml-36 -mt-5"><FaLinkedin /></button>
<button className="ml-44 -mt-[22px]"><AiFillTwitterCircle /></button>
    </h3>
        </div>
        <div><div className="border-t-2 border-custom-footergrey w-[1510px] mt-14 "></div>
        <div className="flex items-center justify-center space-x-6 mt-8">
          <span className="text-2xl ">Description</span>
          <span className="text-2xl text-custom-footergrey">Additional Information</span>
          <span className="text-2xl text-custom-footergrey">Reviews[5]</span>
         </div><p className="flex items-center justify-center ml-56 mr-56 mt-7 text-custom-footergrey ">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br />sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p className="flex items-center justify-center ml-[275px] mr-[275px] text-custom-footergrey mt-4">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br /> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br />to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p> 
         </div>
         <div className="flex items-center justify-center gap-8 mt-8">
        <div className="ml-56"> <Image
       src="/images/singlepro.png"
    alt="next"
       width={970}
      height={60}
      className="   bg-custom-shopbiscuity "
     
    /></div>
    <div className="mr-56">
      <Image
       src="/images/singlepro1.png"
    alt="next"
       width={970}
      height={60}
      className="  bg-custom-shopbiscuity "
     
    /></div>
         </div>
         <div className="producttext mt-20">
    <h3 >Related Products</h3>
   
</div>

<div className="productgap">
  
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
</div>
<div className="flex items-center justify-center mt-7 mb-20">
<button className="border-2 border-custom-yellow text-custom-yellow px-9 py-2">Show More</button>
</div>
     </div>
  );
}
