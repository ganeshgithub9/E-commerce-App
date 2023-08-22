import './ProductCard.css';
import AddToCart from "../AddToCart";
import Rating from "../Rating";

function ProductCard({product,addQuantity,cart,increment,setCart}){
    return (
        <div className='productCard'>
        <div className='product'>
            <h3>{product.title}</h3>
            <div>{product.category}</div>
            <div>Rs.{product.price.value}</div>
            <Rating rating={product.rating.value}/>
            <AddToCart addQuantity={addQuantity} product={product} cart={cart} increment={increment} setCart={setCart}/>
        </div>
        </div>
    );
}
/*function Hello(){
    return (
        <h1>
            Hello world
        </h1>
    );
}*/
//const ec="Export constant"
//export {ProductCard,ec}
export default ProductCard; //default export- 1 default export per component
//export {ec};                //named export- multiple exports
//export default ec;