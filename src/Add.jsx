import React, {useRef, useState} from 'react'
import { time } from 'three/tsl';

const Add = (prop) => {
  const [modal,setModal]=useState(false);
  const nameref=useRef(null);
  const timeref=useRef(null);
  const [id,setId]=useState(0);

  const handleSubmit=(e)=>{
    if(nameref.current.value===null) 
    e.preventDefault();
    const info={
      name:nameref.current.value,
      time:timeref.current.value,
      id:id
    };
    prop.onAdd(info);
    setModal(false);

    nameref.current.value="";
    timeref.current.value="";
    setId(id+1);
  }
  return (
    <>
    <div 
       onClick={()=>setModal(true)}
       className="add-container">
      <div className="add-name">
        + Add a new Plant
      </div>
    </div>

    {modal && 
    
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Add Plant Name"
          className="name"
          type="text"
          ref={nameref}
          required
        />

        <input 
          placeholder="Add feed days"
          className="name"
          type="number"
          ref={timeref}
          required
        />
        <button 
          type="submit"
        >
          Add
        </button>
      </form>
    }
    </>
  )
}

export default Add