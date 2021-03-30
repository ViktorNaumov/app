import React from "react";

export const inputComp =({input,meta,...props})=>{
  
    return (
        <div>
           <input className="inForm" {...input} {...props}/> 
        </div>
    )
}
