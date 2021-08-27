import React, { useState } from "react";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Accordion = ({  title, info }) => {
  const [show, setShow] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=> setShow(!show) }>{show ? <RemoveCircleIcon/>  : <AddCircleIcon />}</button>
      </header>
        {show && <p>{info}</p> }
    </article>
  );
};

export default Accordion;
