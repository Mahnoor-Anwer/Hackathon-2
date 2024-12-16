import Image from "next/image"
export default function checkout() {
  return (
    <div >
             
       <div className="text py-24 flex items-center justify-center "> 
              
              <Image
              src="/images/Shop.png"
              alt="shop Bannre"
              width={1550}
             height={802}
                
           />
         
            <div className="absolute">
               
                       <div className="logo h-14 w-16 text-2xl font-bold text-black relative flex ml-14">
                           <Image src="/images/logo.png" width={165} height={21} alt="Picture" />
                       </div>
              <h3 className="font-bold text-4xl">Check Out</h3>
              <p className="absolute ml-4 font-semibold">Home</p>
              <Image
              src="/images/arrow.png"
           alt="next"
              width={7}
             height={6}
             className="ml-[70px] mt-2"
            
           /><p className="absolute pl-20 -mt-5 mr-3 font-light">CheckOut</p>
             
            </div>
    </div>
   <div className="grid grid-cols-2 gap-20">
<form className="space-y-6 ml-32">
  <div className="flex flex-wrap gap-3">
    <div className="flex-1 min-w-[200px]">
      <label htmlFor="firstname" className="block mb-2 text-[16px] font-normal">First Name</label>
      <input 
      id="firstname"
      type="text" 
      className="w-full border rounded-md p-4 text-[16px]"/>
    </div>
    <div className="flex-1 min-w-[200px]">
      <label htmlFor="lastname" className="block mb-2 text-[16px] font-normal">Last Name</label>
      <input 
      id="lastname"
      type="text"
      className="w-full border rounded-md p-4 text-[16px]" />
    </div>
  </div>
  <div>
    <label htmlFor="companyname" className="block mb-2 text-[16px] font-normal">Company Name (Optional)</label>
    <input 
    id="companyname"
    type="text" 
    className="w-full border rounded-md p-4 text-[16px]"/>
  </div>
<div>
<label htmlFor="country" className="block mb-2 text-[16px] font-normal">Company Name (Optional)</label>
<select  id="country"
className="w-full border rounded-md p-4 text-[16px] bg-white">
  <option value="">Select a country</option>
  <option value="Pakistan">Pakistan</option>
  <option value="Bangladesh">Bangladesh</option>
  <option value="Srilanka">Srilanka</option>
</select>
</div>
<div>
    <label htmlFor="streetaddress" className="block mb-2 text-[16px] font-normal">Street Address</label>
    <input 
    id="streetaddress"
    type="text" 
    className="w-full border rounded-md p-4 text-[16px]"/>
  </div>
  <div className="flex flex-wrap gap-3">
    <div className="flex-1 min-w-[200px]">
      <label htmlFor="city"
      className="block mb-2 text-[16px] font-normal">Town / City</label>
      <input 
      id="city"
      type="text"
      className="w-full border rounded-md p-4 text-[16px]" />
    </div>

    <div className="flex-1 min-w-[200px]">
      <label htmlFor="province"
      className="block mb-2 text-[16px] font-normal">Province</label>
      <input 
      id="province"
      type="text"
      className="w-full border rounded-md p-4 text-[16px]" />
    </div>
  </div>

  <div>
      <label htmlFor="zip"
      className="block mb-2 text-[16px] font-normal">Zip Code</label>
      <input 
      id="zip"
      type="text"
      className="w-full border rounded-md p-4 text-[16px]" />
    </div>

    <div>
      <label htmlFor="phone"
      className="block mb-2 text-[16px] font-normal">Phone</label>
      <input 
      id="phone"
      type="tel"
      className="w-full border rounded-md p-4 text-[16px]" />
    </div>

    <div>
      <label htmlFor="email"
      className="block mb-2 text-[16px] font-normal">Email Address</label>
      <input 
      id="email"
      type="email"
      className="w-full border rounded-md p-4 text-[16px]" />
    </div>


    <div>
      

     
     <textarea  id="additionalinformation"
     rows={4}
     placeholder="Additional Information"
     className="w-full border rounded-md p-4 text-[16px]"></textarea>
    </div>
    </form>

{/* Right Section: Order Details */}
<div className="flex-1 min-w-[300px] p-2 rounded-md mr-32">
          <h2 className="text-[32px] font-[600] mb-9">Product</h2>
          <div className="mb-8 text-[16px]">
            <div className="flex justify-between mb-4">
              <p className="text-gray-400">Asgaard Sofa x 1</p>
              <p>Rs. 250,000</p>
            </div>
            <div className="flex justify-between mb-6">
              <p>Subtotal</p>
              <p>Rs. 250,000</p>
            </div>
            <div className="flex justify-between text-gray-800 font-semibold mb-6">
              <p>Total</p>
              <p className="text-[24px] font-700 text-[#B88E2F]">Rs. 250,000</p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-4">
            <label className="block">
              <input type="radio" name="payment" className="mr-2" />
              Direct Bank Transfer
            </label>
            <p className="text-[14px] text-gray-500 ml-6">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <label className="block">
              <input type="radio" name="payment" className="mr-2" />
              Cash on Delivery
            </label>
            <p className="text-[14px]">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-semibold">privacy policy</span>.
            </p>
          </div>
          <div className="flex justify-center">
          <button className="w-[318px] rounded-xl text-black border-2 border-black text-[20px] font-medium py-4 mt-6 bg-white hover:bg-custom-shopbiscuity transition-all duration-300 ease-in-out shadow-lg">
  Place Order
</button>



          </div>
        </div>
      </div>
      </div>
          


      
      
    
    
  );
}
