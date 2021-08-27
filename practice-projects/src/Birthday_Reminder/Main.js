import React from "react";
import "./Main.css";
import { useState } from "react";
import PeopleList from "./PeopleList";
import data from "./Data";

const Main=()=>{
    const [person,setPerson]=useState(data);

    return(
    <main>
    <section className="container">
        <h3>Total Birrthdays {data.length}</h3>
        <PeopleList people={person}/>
        <button onClick={()=>{
            setPerson()
        }}>Clear All</button>
    </section>
    </main>
    )
}

export default Main;