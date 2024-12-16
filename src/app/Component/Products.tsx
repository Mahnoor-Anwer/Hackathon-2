import Image from "next/image";
 

export default function Product() {
  return (
 <div>   <div className="producttext">
    <h3>Our Products</h3>
   
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

<div className="productgap2">


<div className="p5  bg-custom-whitegrey">
<Image
src="/images/p5.png"
alt=" img"
width={250}
height={900}
className="h-64" 
/> 
<h6 className="font-bold text-2xl ml-3">Grifo</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Night lamp</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 1.500.000 </h2>
</div>



<div className="p6  bg-custom-whitegrey">
<Image
src="/images/p6.png"
alt=" img"
width={250}
height={900}
className="h-64" 
/> 
<h6 className="font-bold text-2xl ml-3">Muggo</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Small mug</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 150.000</h2>
</div>



<div className="p7  bg-custom-whitegrey">
<Image
src="/images/p7.png"
alt=" img"
width={250}
height={900}
className="h-64" 
/> 
<h6 className="font-bold text-2xl ml-3">Pingky</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Cute bed set</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black"> Rp 7.000.000<span>
      <h3 className="font-normal text-custom-lightgray line-through  ml-3 text-base">Rp 14.000.000</h3></span></h2>
</div>



<div className="p8  bg-custom-whitegrey">
<Image
src="/images/p8.png"
alt=" img"
width={250}
height={900}
className="h-64" 
/>
<h6 className="font-bold text-2xl ml-3">Potty</h6>
      <p className="text-custom-gray font-medium text-base ml-3">Minimalist flower pot</p>
    <h2 className="flex text-base font-semibold ml-3 text-custom-black">Rp 500.000 </h2> 
</div>

</div >
<div className="flex items-center justify-center mt-7 mb-16">
<button className="border-2 border-custom-yellow text-custom-yellow px-9 py-2">Show More</button>
</div>

<div className="bg-custom-biscuity w-auto h-[700px] pt-[60px] flex space-x-4">
<div ><h3 className="w-[500px] font-bold font text-5xl mt-44 ml-9">50+ Beautiful rooms<br/>
inspiration</h3>
<p className="mt-5 ml-9 font-medium text-xl text-custom-ajeeb">Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
<button className="border-2 border-custom-yellow bg-custom-yellow text-white mt-5 ml-9 px-10 py-2">Explore More</button></div>
<Image
src="/images/bedroom.png"
alt=" img"
width={250}
height={900}
className="h-[590px] ml-[600px] w-[400px]" 
/>
<Image
src="/images/bedroomp2.png"
alt=" img"
width={250}
height={900}
className="h-[490px] ml-[900px] w-[400px]" 
/>
<Image
src="/images/bedroomhalf.png"
alt=" img"
width={250}
height={900}
className="h-[490px] ml-[900px] w-[100px]" 
/>

</div>


 <div className="Funirofurnitue w-full">
<Image
src="/images/ff.png"
alt=" img"
width={1550}
height={900}
className="h-[800px]" 
/> 

</div> 

</div>

  );
}