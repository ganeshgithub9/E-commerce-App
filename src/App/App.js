import ProductList from "../ProductList/ProductList";
import {useState} from "react";

export default function App(){
    const [cart,setCart]=useState({})
    const addQuantity=(product)=>{
        const newCart={...cart};
        if(!newCart[product.id]){
            newCart[product.id]={
                id:product.id,
                title:product.title,
                quantity:0
            }
        }
        newCart[product.id].quantity +=1;
        setCart(newCart);
    }
    const increment=(product)=>{
        const newCart={...cart};
        newCart[product.id].quantity +=1;
        setCart(newCart);
    }

    return (
        <div>
            <ProductList addQuantity={addQuantity} cart={cart} increment={increment} setCart={setCart}/>
        </div>
    );

}