import {useEffect, useState} from "react";

export default function UseEffect(){
    const [side,setSide]=useState(0)
    const [area,setArea]=useState(0)
    useEffect(()=>{
        setArea(side*side);
        //setTimeout(()=>setSide(side=>side+1),2000);
    },[side])
    return (
        <div>
             <h3>Square side:{side}</h3>
             <h3>Area:{area}</h3>
             <button onClick={()=>setSide(side=>side+1)}>side+1</button>  {/* both side and area values updated, but only side rendering worked */}
            {/* <button onClick={()=>setSide(side=>side+1)}>side+1</button> */}
        </div>
    )
}