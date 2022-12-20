import React from "react";
import {
  Routes,
  Route,
  Link ,
  useParams
} from "react-router-dom";

const Home = (props) => {
  const { elem,font,back } = useParams();
  if(!isNaN(elem)){
    console.log(isNaN(elem));
    return (
      <div>
         <h1 style={{color: font,backgroundColor:back}}>The Number is: {elem}</h1>
      </div>
    );
  }
  else{
    return (
      <div>
         <h1 style={{color: font,backgroundColor:back}}>The Word is: {elem}</h1>
      </div>
    );
  }
}
  const Home1 = (props) => {
  return (
    <div>
       <h1 style={{color: "red"}}>Welcome</h1>
    </div>
  );
}

    
// const About = (props) => {
//   return (
//     <div>
//         <h1 style={{color: "blue"}}>About Component</h1>
//         <Link to={"/"}>Go Home</Link> 
//     </div>
//   );
// }
    
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home1 />} />
        <Route path="/:elem" element={<Home />} />
        <Route path="/:elem/:font" element={<Home />} />
        <Route path="/:elem/:font/:back" element={<Home />} />
      </Routes>
    </div>
  );
}
    
export default App
