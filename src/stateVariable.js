import ProductCard from "./ProductCard";
import './ProductCard/ProductCard.css'
import {useState} from "react";
import Loader from "./Loader";

const list=[
    {
        'name':'Boat Rockerzz 200 bazz',
        'price':'Rs.2499'
    },
    {
        'name':'Oneplus buds pro',
        'price':'Rs.3699'
    },
    {
        'name':'Apple buds 14pro',
        'price':'Rs.24699'
    }
]

export default function StateVariable(){
    const [allProducts,setAllProducts]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    setTimeout(function (){
        setIsLoading(false);
        setAllProducts(list);
    },3000);

    if(isLoading)
        return (<div><Loader/></div>);
    else {
        return (
            <div>
                {allProducts.map((product) => (<ProductCard name={product.name} price={product.price}/>))}
            </div>
        );
    }
}