import React from 'react'
import { useState } from 'react'
const Tabs = (props) => {
    const [active,setActive]=useState("");
    // const clicked="nav-link active";
    // const unclicked="nav-link";
    // const click=(e)=>{
    //     this.className=clicked;
    // }
    const click=(index)=>{
    setActive(index);
    props.setMessage("This is Tab"+index)
  }

  return (
    <div>
    <ul className="nav nav-tabs">
  <li className="nav-item">
    {active ===0?<p className="nav-link active"  onClick={()=>click(0)}>Link</p>:<p className="nav-link"  onClick={()=>click(0)}>Link</p>}
  </li>
  <li className="nav-item">
    {active ===1?<p className="nav-link active"  onClick={()=>click(1)}>Link</p>:<p className="nav-link"  onClick={()=>click(1)}>Link</p>}
  </li>
  <li className="nav-item">
    {active ===2?<p className="nav-link active"  onClick={()=>click(2)}>Link</p>:<p className="nav-link"  onClick={()=>click(2)}>Link</p>}
  </li>
    </ul>
    </div>
  )
}

export default Tabs