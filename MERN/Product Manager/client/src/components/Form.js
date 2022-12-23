import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const submit=e=>{
        e.preventDefault();

        
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
  return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={submit}>
            <p>
            <label>Title</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}></input>
            </p>
            <p>
            <label>Price</label>
            <input type="text" onChange={(e)=>setPrice(e.target.value)}></input>
            </p>
            <p>
            <label>Description</label>
            <input type="text" onChange={(e)=>setDescription(e.target.value)}></input>
            </p>
            <button>Create</button>
        </form>
    </div>
  )
}

export default Form