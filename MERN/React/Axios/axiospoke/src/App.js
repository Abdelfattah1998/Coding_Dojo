import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {


  const [responseData, setResponseData] = useState([]);
    const Fetchpoke=()=>{
      // useEffect(()=>{
          axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
              .then(response=>{setResponseData(response.data.results);
              console.log(response.data.results)
              })
      // }, []); 
    }
    return(
      <div>
          <button onClick={Fetchpoke}></button>
            {responseData.map(a=>
            <ul>
              <li>{a.name}</li>
            </ul>
            
            )}
        </div>
  );
}

export default App;
