import Image from "next/image";
import Banner from "./Component/Banner"
import Browse from "./Component/browse";
import Product from "./Component/Products";
export default function Home(){
    return(
<div>
    <Banner/>
    <Browse/>
    <Product/>
</div>
    );
}

