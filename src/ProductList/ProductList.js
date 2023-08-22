import {useEffect, useState} from "react";
import './ProductList.css'
import ProductCard from "../ProductCard";
//import Axios from 'axios';
//  function getProducts(){
//     console.log("start of async function")
//     return fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
//         .then((response)=>{
//             const prom=response.json()
//             console.log(prom)
//             return prom})
//         .then(json=>json);
//    // return response;
//     //console.log("middle of async function")
//     // console.log(response)
//     // let jsonResponse=response.json();
//     // console.log(jsonResponse)
//     // return JSON.stringify(jsonResponse);
//     /*.then(function (res){
//         return JSON.stringify(res.json());
//     })*/
// }
//const prom=getProducts()
//console.log(prom)
//console.log("out of async function")
function ProductList({addQuantity,cart,increment,setCart}) {
    /*const products=[
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
    ] */
    function getProducts(){
        console.log("start of async function")
        return fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
            .then((response)=>{
                const prom=response.json()
                console.log(prom)
                return prom})
            .then(json=>json);
        // return response;
        //console.log("middle of async function")
        // console.log(response)
        // let jsonResponse=response.json();
        // console.log(jsonResponse)
        // return JSON.stringify(jsonResponse);
        /*.then(function (res){
            return JSON.stringify(res.json());
        })*/
    }

    const [products,setProducts]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect( ()=>{
        async function ar(){
            let pro=await getProducts();
            //let pro=getProducts()
            setProducts(pro);
            setIsLoading(false);}
        ar();
    },[])
    //setProducts(prom)
    if(isLoading)
        return (<div>***Loading***</div>);
    return (
        <div className='productList'>
            {
                /* <ProductCard name='Boat Rockerzz 200 bazz' price='Rs.2499'/>
           <ProductCard name='Oneplus buds pro' price='Rs.3699'/>
           <ProductCard name='Apple buds 14pro' price='Rs.24699'/> */ }
            {
                //console.log(products)

                /*products.map((product) => {
                    return (<ProductCard name={product.title} price={product.category}/>);
                    <div>{products}</div>
                }) */
            }
            <div>{products.map(pro=>{return (<ProductCard product={pro} addQuantity={addQuantity} cart={cart} increment={increment} setCart={setCart}/>);})}</div>
        </div>
    );

    /* return (
         <OnChange/>
     ); */
    /* <h1>{ec}</h1><div>{pi}</div>
                  <ProductCardChild/> */
    // return (<StateVariable/>);
    // return (<UseEffect/>)
}

export default ProductList;
