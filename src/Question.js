import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';


const Question = (props) => {
  //  %%% variables %%%
  const {title,info} = props
  const [fullView,setFullView] = useState(false)

  return (
    <article className="question">
      <header className="question">
        <h4>{title}</h4>
        <button className="btn" onClick={() => setFullView(!fullView)}>
          {fullView ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
      </header>
      {fullView && <p>{info}</p>}
    </article> 
  );
};

export default Question;
