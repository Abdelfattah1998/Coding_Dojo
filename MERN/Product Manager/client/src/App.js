import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Form from './components/Form';
import Update from './components/Update';
import {  Routes,Route} from "react-router-dom";
// import Main from './components/Main';
import ProductList from './components/ProductList';
import Product from './components/Product';
function App() {
  const [products, setProducts] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  
  useEffect(()=>{
      axios.get('http://localhost:8000/api/products')
          .then(res=>{
            setProducts(res.data);
            // setLoaded(true);
          })
          .catch(err => console.error(err));
  },[]);
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
        <Form setProducts={setProducts} products={products}></Form>
         <ProductList products={products}></ProductList>
          </>
        }/>
        <Route path="/:id" element={<Product></Product>}></Route>
        <Route element={<Update/>} path="/:id/edit"/>


      </Routes>
    </div>
  );
}
export default App;
