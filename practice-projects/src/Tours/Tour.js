import React from "react";
import { useState } from "react";


const Tour=({id,image,info,name,price,removeTour})=>{
    const [show,setShow]=useState(false);
return(
    <article className="single-tour">
    <img src={image} alt={name}></img>
    <footer>
        <div className="tour-info">
            <h4>{name}</h4>
            <h4>Price: ${price}</h4>
        </div>
        <p>{show ? info : `${info.substring(0,150)}...`}
        <button onClick={()=>{setShow(!show)}}>{show ? "show Less": "read more"}</button>
        </p>
        <button className="delete-btn" onClick={()=>{ removeTour(id); console.log(id)}}>Remove Tour</button>
    </footer>
    </article>
)
}

export default Tour;