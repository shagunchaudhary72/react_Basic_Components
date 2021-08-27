import React, { useState } from "react";
import "./Main.css";
import data from "./Data";

const Main = () => {
  const [count, setCount] = React.useState(0);
  const [textData,setTextData] = useState([]);

  const inputValue=(event)=>{
    setCount(event.target.value);

    
  }

  const showText=(event)=>{
      event.preventDefault();
      let amount = count;
      if(count < 0){
        amount = 0;
      }
      if(count >=11){
          amount =11;
      }
      setTextData(data.slice(0, amount));

  }

  return (
    <>
      <section className="section-center">
      <h3>Want  your Own Lorem Ipsum !!! </h3>
        <form className="lorem-form" onSubmit={showText}>
          <label htmlFor="textVal">Enter Count : </label>
          <input
            type="number"
            value={count}
            name="textVal"
            id="textVal"
            onChange={inputValue}
          ></input>
          <button className="btn">Submit</button>
        </form>
        <article className="lorem-text">
            {textData.map((items,index)=>{
                return (
                    <p key={index}>{items}</p>
                )
            })}
        </article>
      </section>
    </>
  );
};

export default Main;
