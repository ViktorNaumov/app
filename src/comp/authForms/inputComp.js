import React from "react";

export const inputComp =({input,meta,...props})=>{
  
    return (
        <div>
           <input className="inForm" {...input} {...props}/>
           {meta.touched &&
        ((meta.error && <span>{meta.error}</span>) ||
          (meta.warning && <span>{meta.warning}</span>))} 
        </div>
    )
}
