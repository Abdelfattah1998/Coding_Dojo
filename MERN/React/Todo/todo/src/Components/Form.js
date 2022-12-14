import React from 'react'
import { useState } from 'react'
const Form = (props) => {
    const [text,setText]=useState("")
    const texter=(e)=>{
        setText(e.target.value);

    }
    const addtask=(e)=>{
        e.preventDefault();
        props.setTask(props.tasks.concat({text:text,value:false}));
    }
  return (
    <div>
        <form onSubmit={(e)=>addtask(e)}>
            <input type="text" onChange={(e)=>texter(e)}></input>
            <button></button>
        </form>
    </div>
  )
}

export default Form