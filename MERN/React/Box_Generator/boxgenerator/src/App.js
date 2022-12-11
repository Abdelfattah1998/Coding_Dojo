import { useState } from 'react';

import './App.css';
import Boxer from './Components/Boxes';
import BoxAdder from './Components/form';
function App() {
  const [boxes, setBoxes] = useState([]);
  return (
    <div className="App">
      <BoxAdder setBoxes={setBoxes} boxes={boxes}></BoxAdder>
      <Boxer color={boxes}></Boxer>
    </div>
  );
}

export default App;
