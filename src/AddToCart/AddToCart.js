import {useState} from "react";

export default function AddToCart({product,addQuantity,cart,increment,setCart}){
    const [quantity,setQuantity]=useState(0);
    // const add=()=>{
    //     addQuantity(product);
    // }
    const inc=()=>{
        const newCart={...cart};
        if(!newCart[product.id]){
            newCart[product.id]={
                id:product.id,
                title:product.title,
                quantity:0
            }
        }
        newCart[product.id].quantity +=1;
        setQuantity(newCart[product.id].quantity)
        setCart(newCart);
    }
    const dec=()=>{
        const newCart={...cart};
        newCart[product.id].quantity -=1;
        setQuantity(newCart[product.id].quantity)
        setCart(newCart);
    }
    //let quantity=cart[product.id]?cart[product.id].quantity:0;
    if(quantity>0){
        return (
            <div>
                <button onClick={dec}>-</button>
                <span>{quantity}</span>
                <button onClick={inc}>+</button>
            </div>
        )
    }
    else {
        return (
            <button onClick={inc}>AddToCart</button>
        );
    }
}