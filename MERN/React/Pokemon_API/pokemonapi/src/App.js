import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
    const[pokemon,setPokemon]=useState(null)
    const [loaded,setLoaded]=useState(false)

      useEffect(() => {
          fetch("https://pokeapi.co/api/v2/pokemon")

          .then(response => {
            return response.json();
        }).then(response => {
            setPokemon(response.results);
            console.log(response.results);
            setLoaded(true)
        }).catch(err=>{
            console.log(err);
        });
    }, []);
  return (
    <div >
      {loaded && pokemon.map((a)=><p>{a.name}</p>)}
    </div>
  );
}

export default App;
