import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const url='https://course-api.com/react-tabs-project'

const Main = () => {
    const [loading,setLoading]=useState(true);
    const [jobData,setCandidateData]=useState([])
    const [value,setValue]=useState(0)
    
    const fetchData=async ()=>{
        setLoading(true);
        const response=await fetch(url);
        const jobData=await response.json();
        setCandidateData(jobData)
        console.log(jobData);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData()
    },[])

    if(loading){
        return(
            <Loading />
        )
    }

  
    const { company, dates, duties, title } = jobData[value]
    return (
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          
          <div className="btn-container">
            {jobData.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}
                >
                  {item.company}
                </button>
              )
            })}
          </div>
        
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <DoneOutlineIcon className="job-icon" />
                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
        <button type="button" className="btn">
          more info
        </button>
      </section>
    
  );
};

export default Main;
