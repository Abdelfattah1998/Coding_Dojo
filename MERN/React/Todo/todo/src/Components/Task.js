import React from 'react'
// import { useState } from 'react'
const Task = (props) => {
    const check=id=>{
      const item=props.tasks.filter((id,i)=>id==i)
        item[0].value=!item[0].value;
        props.setTask(props.tasks)
    }

  return (
    <div>
        {props.tasks.map((i,id)=>{return(
          <>
          <></>
            <p key={id}>{i.text} <input type='checkbox' value={props.tasks[id].value} onClick={(e) => check(id)}></input></p>
          </>
        )})}

    </div>
  )
}

export default Task