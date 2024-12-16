import Image from "next/image";
export default function Cart() {
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
        
                <div className="logo h-14 w-16 text-2xl font-bold text-black relative flex">
                    <Image src="/images/logo.png" width={145} height={21} alt="Picture" />
                </div>
       <h3 className="font-bold text-4xl">Cart</h3>
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
       <div className="bg-custom-shopbiscuity w-[900px] h-20  -mt-[67px] flex items-center justify-center ml-28">
        <p className="font-semibold">Product</p>
        <p className="font-semibold ml-44">Price</p>
        <p className="font-semibold ml-44">Quantity</p>
        <p className="font-semibold ml-8">Subtotal</p>
        </div>
        <Image
       src="/images/cart.png"
    alt="next"
       width={108}
      height={6}
      className="ml-28 mt-16"
     
    />
      <p className="ml-64 -mt-20 text-custom-footergrey">Asgaard Sofa</p>
      <p className="text-custom-footergrey ml-[450px] -mt-5">Rs. 250,000.00</p>
      <p className=" border border-custom-footergrey ml-[700px] mr-[790px] pl-2 pr-2 -mt-6 rounded-sm flex justify-center items-center">1</p>
<p className="ml-[770px] -mt-6">Rs. 250,000.00</p>
<Image
       src="/images/deletecart.png"
    alt="next"
       width={28}
      height={6}
      className="ml-[930px]  -mt-6"
     
    />
    <div className="bg-custom-shopbiscuity  items-center justify-center ml-[1050px] mr-24 -mt-[200px]">
        <h3 className="text-2xl font-semibold ml-28 pt-7">Cart Totals</h3>
        <p className="ml-20 mt-10 font-semibold">Subtotal</p>
        <p className="text-custom-footergrey ml-44 -mt-6">Rs. 250,000.00</p>
        <p className="ml-20 font-semibold mt-4">Total</p>
        <p className="ml-[180px] -mt-5 font-semibold text-custom-yellow">Rs. 250,000.00</p>
        <a href="/checkout"><button className="ml-28 mt-16 border border-black rounded-md pl-10 pr-10 pt-3 pb-3 mb-14">Check Out</button></a></div>
    
    <div className="mt-20 ">
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


