import Image from "next/image";
 

export default function Browse() {
  return (
   <div> <div className="subText">
            <h3> Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

<div className="sidegap">
    <div className="img1">


   
         <Image
        src="/images/b1.png"
        alt="living"
        width={300}
       height={480}
       className="h-96"  // Different height for this image
      /> <h6>Dining</h6>
    </div>

   <div className="img2">


   
         <Image
        src="/images/b2.png"
        alt="living"
        width={300}
       height={480}
       className="h-96"  // Different height for this image
      /> <h6>Living</h6>
    </div> 
    
    
     <div className="img3">
<Image
src="/images/b3.png"
alt="Bedroom img"
width={300}
height={900}
className="h-96"  // Different height for this image
/> <h6>Bedroom</h6>
</div>


    
</div>

</div>
  );
}
