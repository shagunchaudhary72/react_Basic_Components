import React, { useState } from "react";
import data from "./Data";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';



const Reviews=()=>{
    const [index,setIndex]=useState(0);

    const {name,job,text,image}=data[index];

    const checkIndex=(newIndex)=>{
        if(newIndex < 0){
            return data.length-1;
        }
        if(newIndex > data.length-1){
            return 0;
        }
        return newIndex;
    }

    const nextPerson=()=>{
        setIndex((index)=>{
            let newIndex=index+1;
            return checkIndex(newIndex)
        });
    }

    const prevPerson=()=>{
        setIndex((index)=>{
            let newIndex=index-1;
            return checkIndex(newIndex);
        });
    }

    const randomPerson=()=>{
        setIndex((index)=>{
            let newIndex=Math.floor(Math.random()*data.length);
            if(newIndex === index){
                newIndex=index +1;
            }
           return checkIndex(newIndex);
        })
    }

 return(
    <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FormatQuoteIcon/>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson}>
      <ArrowBackIcon/>
      </button>
      <button className='next-btn' onClick={nextPerson}>
      <ArrowForwardIcon/>
      </button>
    </div>
    <button className='random-btn' onClick={randomPerson}>
      Random person
    </button>
  </article>
 )
}

export default Reviews;