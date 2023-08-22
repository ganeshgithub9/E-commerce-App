import {useState} from "react";

export default function OnChange(){
    const [desc,setDesc]=useState('');
    return (
        <div>
        <input type='text' placeholder='enter description' onChange={(e)=>{setDesc(e.target.value)}}/>
         <div>{desc}</div>
        </div>
    );
}