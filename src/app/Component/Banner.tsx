import Image from "next/image";
export default function Banner() {
    return (
    
     
          
          <div className="main " >
            <Image
              src="/images/banner.jpg"
              alt="Furniture Banner"
              width={1550}
             height={802}
             
            />
             <div className="heroText bg-[#FFF3E3]">
          <h6>New Arrival</h6>
          <h3>Discover Our <br /> New Collection</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. ut<br/>elit tellus,luctus nec ullamcorper mattis</p>
            <button className=" buyBtn">BUY NOW</button>
        </div>
           
          </div>
        
          
     
       
     
    );
  }