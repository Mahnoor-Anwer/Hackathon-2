

export default function Footer() {
  return (
    <footer className="bg-white ">
      
      <div className="border-t border-l-custom-whitishgrey flex justify-between items-center  px-7  mt-8 "></div>
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
   
        <div className="pt-12">
          
            <h3 className="text-black  font-bold text-3xl">Funiro.</h3>
           <p className="text-custom-footergrey text-sm pt-6">400 University Drive Suite 200 Coral <br /> Gables,<br />
           FL 33134 USA</p>
          
        </div>

        
      
        <div className="pt-12">
          <ul >
            <li className="text-custom-footergrey font-semibold">Links</li>
            <li className="font-semibold text-sm pt-6 cursor-pointer">Home</li>
            <li className="font-semibold text-sm pt-6 cursor-pointer">Shop</li>
            <li className="font-semibold text-sm pt-6 cursor-pointer">About</li>
            <li className="font-semibold text-sm pt-6 cursor-pointer" >Contact</li>
          </ul>
        </div>

    
        <div className="pt-12">
          <ul >
            <li className="text-custom-footergrey font-semibold"> HELP</li>
            <li className="font-semibold text-sm pt-6 cursor-pointer">Payment Options</li>
            <li className="font-semibold text-sm pt-6 cursor-pointer">Returns</li>
            <li className="font-semibold text-sm pt-6 cursor-pointer">Privacy Policies</li>
          </ul>
        </div>

        <div className="pt-12">
          <ul >
            <li className="text-custom-footergrey font-semibold"> Newsletter</li>
            <input 
            type="Email"
            placeholder="Enter Your Email Address"
            className="underline decoration-gray-400"/>
            <button className=" underline decoration-gray-400">Subscribe</button>
          </ul>
        </div>


     
      </div>

      <div className="border-t w-[1400px] ml-10 border-l-custom-whitishgrey flex justify-between items-center py-9 px-7  mt-16 ">
  <div className="flex">
    <p className="text-sm text-black">
      2023 Furino. All rights reserved.
    </p>
  </div>
</div>

    </footer>
  );
}