import {FaStar} from 'react-icons/fa';
import {useState} from "react";

export default function Rating(){
    const [color,setColor]=useState(false)
    return (
        <FaStar onClick={()=>{setColor(col=>!col)}} color={color?"orange":"grey"}/>
    );
}