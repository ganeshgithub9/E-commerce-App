import {FaStar} from 'react-icons/fa';
import {useState} from "react";

export default function Rating({rating}){
   // const [color,setColor]=useState(false)
    { /*<FaStar onClick={()=>{setColor(col=>!col)}} color={color?"orange":"grey"}/> */}
    return (
        <div>
            {new Array(5).fill(0).map((_,index)=>{return (<FaStar color={index+1<=rating?"orange":"grey"}/>)})}
        </div>
    );
}