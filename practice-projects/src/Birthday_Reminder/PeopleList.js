import React from "react";

const PeopleList = ({people}) =>{
return (
    <>
        {people.map((person)=>{
            return(
                <article id={person.id} class="person">
                    <img src={person.image} alt={person.name}></img>
                    <div>
                        <p>Name: {person.name}</p>
                        <h4>Age: {person.age}</h4>
                    </div>
                </article>
            )
        })}
    </>
  );
};

export default PeopleList;
