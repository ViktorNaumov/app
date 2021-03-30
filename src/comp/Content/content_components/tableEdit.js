import React from "react";
import out from "../../../IMG/out.png"

const TableEdit =(props)=>{
    const f =()=>{
        props.tableEdit(props.id)
    }
    return(
        <div className="edit" onClick={f}>
            <img src={out} ></img>
          </div>
    )
}

export default TableEdit;