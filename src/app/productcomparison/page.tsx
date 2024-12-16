import Image from "next/image";

export default function productcomparison(){
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
                   
                           <div className="logo h-14 w-16 text-2xl font-bold text-black relative flex ml-32">
                               <Image src="/images/logo.png" width={165} height={21} alt="Picture" />
                           </div>
                  <h3 className="font-bold text-4xl">Product Comparison</h3>
                  <p className="absolute ml-24 font-semibold">Home</p>
                  <Image
                  src="/images/arrow.png"
               alt="next"
                  width={7}
                 height={6}
                 className="ml-[150px] mt-2"
                
               /><p className="absolute ml-40 -mt-5 mr-3 font-light"> Comparison</p>
                 
                </div>
        </div>
    <p className="text-2xl font-semibold -mt-14 ml-14">Go to Product <br /> page for more <br />
    Products</p>
    <button className="text-custom-footergrey underline ml-14 text-2xl">View More</button>
    <Image
                  src="/images/comparisonp1.png"
               alt="next"
                  width={200}
                 height={6}
                 className="ml-[400px] -mt-28"
                
               />
               <h3 className="font-semibold ml-[400px] mt-4">Asgaard Sofa</h3>
               <p className="font-semibold ml-[400px]">Rs.250,000.00</p>
               <p className="font-semibold ml-[400px]">4.7</p>
               <Image
                  src="/images/starrating.png"
               alt="next"
                  width={100}
                 height={6}
                 className="ml-[430px] -mt-5"
               />
               <div className="border-l-2 border-custom-lightgray h-5 ml-[535px] -mt-4"><p className="text-custom-lightgray ml-1 -mt-1 text-sm">204 Reviews</p></div>
               <Image
                  src="/images/comparisonp2.png"
               alt="next"
                  width={200}
                 height={6}
                 className="ml-[800px] -mt-[220px] bg-custom-shopbiscuity rounded-md "
                
               /> <h3 className="font-semibold ml-[800px] mt-4">Asgaard Sofa</h3>
               <p className="font-semibold ml-[800px]">Rs.250,000.00</p>
               <p className="font-semibold ml-[800px]">4.7</p>
               <Image
                  src="/images/starrating.png"
               alt="next"
                  width={100}
                 height={6}
                 className="ml-[830px] -mt-5"
               />
               <div className="border-l-2 border-custom-lightgray h-5 ml-[935px] -mt-5">
              
               <p className="text-custom-lightgray ml-1 -mt-1 text-sm">204 Reviews</p> 
               <h3 className=" text-2xl font-semibold ml-36 -mt-52">Add A Product</h3>
               <select name="types" id="sofas" className="bg-custom-yellow ml-36 mt-4 text-white border-custom-yellow rounded-md pr-9 pl-3 pt-2 pb-2">
                <option value="">Choosa a product</option>
                <option value="Outdoor sofa set">Outdoor sofa set</option>
                <option value="Asgaard sofa">Asgaard sofa</option></select></div>
                
                
                <div className="border-t-2 border-custom-whitegrey mt-16 ">
                <div className="border-l-2 border-custom-whitegrey h-[1800px] ml-[350px] absolute">
                <div className="border-l-2 border-custom-whitegrey h-[1800px] ml-[350px] absolute">
                <div className="border-l-2 border-custom-whitegrey h-[1800px] ml-[350px] absolute"></div>
                <div className="flex flex-col space-y-6 mt-[70px] ml-16 font-semibold">
          <span className="">1 Three Seater, 2 Single Seater</span>
          <span className=" ">DTUBLIGRBL568</span>
          <span className=" ">Solid Wood</span>
          <span className=" ">L-Shaped</span>
          <span className=" ">Fabric + Cotton</span>
          <span className=" ">Bright Grey & Lion</span>
         </div> 

         <div className="flex flex-col space-y-9 mt-24 ml-16 font-semibold ">
          <span className="">Matte</span>
          <span className=" ">Bright Grey & Lion</span>
          <span className=" mb-10">Yes</span>
          <span className=" ">300kg</span>
          <span className=" ">India</span>
      
         </div> 

         <div className="flex flex-col space-y-6 mt-[140px] ml-16 font-semibold ">
          <span className="">265.32 cm</span>
          <span className=" ">76 cm</span>
          <span className=" mb-10">167.76 cm</span>
          <span className=" ">65 KG</span>
          <span className=" ">41.52 cm</span>
          <span className=" ">5.46 cm</span>
      
         </div> 
         <div className="flex flex-col space-y-4 mt-[160px] ml-16 font-semibold text-xs ">
          <span className="">1.2 Year Manufacturing  Warranty</span>
          <span className=" ">For Warranty Claims or Any Product Related  Issues Please Email at support@xyz.com</span>
          <span className=" mb-10">Warranty of the product is limited to manufacturing defects  only.</span>
          <span className=" ">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use  And Wear & Tear In The Natural Course Of Product Usage.</span>
          <span className=" ">3 Months</span>
         
        
      
         </div>
         <button className="bg-custom-yellow text-white p-[6px] mt-6 pr-7 pl-7 font-semibold ml-12 ">Add To Cart</button>
                </div> 
                
                
                <div className="flex flex-col space-y-6 mt-20 ml-16 font-semibold">
          <span className="">1 sectional sofa</span>
          <span className=" ">TFCBLIGRBL6SRHS</span>
          <span className=" ">Solid Wood</span>
          <span className=" ">L-Shaped</span>
          <span className=" ">Fabric + Cotton</span>
          <span className=" ">Bright Grey & Lion</span>
         </div> 
         <div className="flex flex-col space-y-9 mt-36 ml-16 font-semibold ">
          <span className="">Foam</span>
          <span className=" ">Bright Grey & Lion</span>
          <span className=" mb-10">No</span>
          <span className=" ">280kg</span>
          <span className=" ">India</span>
      
         </div> 
         <div className="flex flex-col space-y-6 mt-[160px] ml-16 font-semibold ">
          <span className="">265.32 cm</span>
          <span className=" ">76 cm</span>
          <span className=" mb-10">167.76 cm</span>
          <span className=" ">45 KG</span>
          <span className=" ">41.52 cm</span>
          <span className=" ">5.46 cm</span>
      
         </div> 
          <div className="flex flex-col space-y-4 mt-[160px] ml-16 font-semibold text-sm ">
          <span className="">1 Year Manufacturing <br /> Warranty</span>
          <span className=" ">For Warranty Claims or <br />Any Product Related <br /> Issues Please Email at <br /> operations@trevifurnitu <br />re.com</span>
          <span className=" mb-10">Warranty Against <br />Manufacturing Defect</span>
          <span className=" ">The Warranty Does Not <br />Cover Damages Due To <br />Usage Of The Product <br />Beyond Its Intended Use <br /> And Wear & Tear In The <br />Natural Course Of <br />Product Usage.</span>
          <span className=" ">1 Year</span>
          <button className="bg-custom-yellow text-white p-2">Add To Cart</button>
        
      
         </div> </div>


         
                <h3 className="text-3xl font-semibold mt-5 ml-20">General</h3>
                <div className="flex flex-col space-y-6 mt-8 ml-20 font-semibold">
          <span className="">Sales Pakage</span>
          <span className=" ">Model Number</span>
          <span className=" ">Secondary Material</span>
          <span className=" ">Configuration</span>
          <span className=" ">Upholstery Material</span>
          <span className=" ">Upholstery Color</span>
         </div> 

         <h3 className="text-3xl font-semibold mt-20 ml-20">Product</h3>
         <div className="flex flex-col space-y-6 mt-8 ml-20 font-semibold">
          <span className="">Filling Material</span>
          <span className=" ">Finish Type</span>
          <span className=" ">Adjustable Headrest</span>
          <span className=" ">Maximum Load <br />Capacity</span>
          <span className=" -mt-4"></span>
          <span className=" ">Origin Of Manufacture</span>
         </div> 

         
         <h3 className="text-3xl font-semibold mt-20 ml-20">Dimentions</h3>
         <div className="flex flex-col space-y-6 mt-8 ml-20 font-semibold">
          <span className="">Width</span>
          <span className=" ">Height</span>
          <span className=" ">Depth</span>
          <span className=" ">Weight</span>
          <span className=" -mt-4">Seat Height</span>
          <span className=" ">Leg Height</span>
         </div> 


          
         <h3 className="text-3xl font-semibold mt-20 ml-20">Warranty</h3>
         <div className="flex flex-col space-y-16 mt-8 ml-20 font-semibold">
          <span className="">Warranty Summary</span>
          <span className=" ">Warranty Service <br /> Type</span>
          <span className=" ">Covered In Warranty</span>
          <span className=" ">Not Covered In <br />Warranty</span>
          <span className=" -mt-4">Domestic warranty</span>
          
         </div> </div>
         <div className="mt-10 ">
                 <Image
                 src="/images/shopn.png"
                 alt=" img"
                 width={1570}
                 height={500}
                 className="h-56 mt-16"
                 /> </div>
               </div>

    );
}
