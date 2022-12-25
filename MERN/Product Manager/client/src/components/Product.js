import React, { useState,useEffect } from 'react'
import { useParams } from "react-router";
import axios from 'axios'
const Product = (props) => {
    const [product,setProduct]=useState("")
    const { id } = useParams(); // matches our :id in our Routes
    useEffect(() => {
    axios.get('http://localhost:8000/api/product/'+id)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
      }, [id]);
  return (
    <div>
      <h1>The Product:</h1>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>
    </div>
  )
}

export default Product