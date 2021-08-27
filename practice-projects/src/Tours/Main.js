import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Main.css";
import Loading from "./Loading";
import Tours from "./Tours";


const apiUrl=`https://course-api.com/react-tours-project`

const Main=()=>{

const [loading,setLoading]=useState(true);
const [toursData,setToursData]=useState([]);

const fetchData=async ()=>{
    setLoading(true)
    const response=await fetch(apiUrl);
    const toursData=await response.json();
    setToursData(toursData);
    console.log(toursData)
    setLoading(false)
}

const removeTour=(id)=>{
    const newData=toursData.filter((itemss)=> itemss.id !== id)
    setToursData(newData)

    console.log(newData)
    console.log(id)
}

useEffect(()=>{
    fetchData();   
},[])

if(loading){
    return <Loading></Loading>
}

if(toursData.length===0){
    return(
    <>
    <h1>No Data ....</h1>
    <button onClick={()=> fetchData()}>Refresh</button>
    </>
    )
}

    return(
        <main>
        <Tours toursData={toursData} removeTour={removeTour}/>
        </main>
    )
}

export default Main;