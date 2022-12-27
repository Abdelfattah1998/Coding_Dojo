import axios from 'axios';
import React from 'react'
// import axios from 'axios';
import { Link} from "react-router-dom";

const ProductList = (props) => {
    const Delete=(e,id)=>{
        console.log(id)
        console.log(e.target.parentElement)
        axios.delete('http://localhost:8000/api/products/'+id)
        .then(res=>{console.log(res);
            e.target.parentElement.remove()})
        .catch(err=>console.log(err))

    }
    return (
        <div>
            {props.products.map( (product, i) =>
            <div>
                <Link to={"/"+product._id}>
                    <p key={i}>{product.title}, {product.price},{product.description}</p>
                </Link>
                
                <Link to={"/"+product._id+"/edit"}>
                    <button>Update</button>
                </Link>
 
                
                    <button onClick={(e)=>Delete(e,product._id)}>Delete</button>

                
            </div>
            )}
        </div>
    )
}
    
export default ProductList;

