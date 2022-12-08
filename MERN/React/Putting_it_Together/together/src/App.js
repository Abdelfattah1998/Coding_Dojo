import React from 'react'
import './App.css';
import SomeClassComponent from './Components/SomeClassComponent';
function App () {    
  return(
    <>
    <SomeClassComponent firstName="Doe" lastName="Jane" age={45} hairColor={"Black"}></SomeClassComponent>
    <SomeClassComponent firstName="Smith" lastName="John" age={45} hairColor={"red"}></SomeClassComponent>
    <SomeClassComponent firstName="Fillmore" lastName="Millard" age={45} hairColor={"blonde"}></SomeClassComponent>
    <SomeClassComponent firstName="Smith" lastName="Maria" age={45} hairColor={"Brown"}></SomeClassComponent>
    </>
  );
}

export default App;
