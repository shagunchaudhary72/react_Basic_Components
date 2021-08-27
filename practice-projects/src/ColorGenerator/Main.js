import React, { useState } from "react";
import SingleColor from "./SingleColor";
import "./Main.css";
import Values from "values.js";

const Main = () => {
const [color,setColor]=useState('');
const [colorList,setColorList]=useState(new Values('#f15025').all(5));
const [error,setError]=useState(false);
console.log(colorList);

  const changeHandler=(event)=>{
    setColor(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    try{
      let colors= new Values(color).all(10);
      setColorList(colors);
    }
    catch(error){
      setError(true);
      console.log(error);
      alert("enter a Valid Color");
    }
  };
  return (
    <>
    <section className="container">
      <h3>Your Color Generator !!!</h3>
      <form className="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="#f15025"
          value={color}
          onChange={changeHandler}
          className={`${error ? "error" : null }`}
        ></input>
        <button className="btn">Submit</button>
      </form>
    </section>
    <section className="colors">
      {colorList.map((items,index)=>{
        return <SingleColor key={index} {...items} index={index} hexColor={items.hex} />
      })}
    </section>
    </>
  );
};

export default Main;
