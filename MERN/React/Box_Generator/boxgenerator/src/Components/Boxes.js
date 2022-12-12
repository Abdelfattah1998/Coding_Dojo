import React, { useState } from "react";

// const Box = ({ color }) => (

//   );

const Boxer = (props) => {
  return (
    <div>
      <div>
        {props.color.map(x => (
    <div key={x}
    style={{
      backgroundColor: x,
      width: "100px",
      height: "100px",
      display: "inline-block",
      margin: "0.5em"
    }}
  />
        ))}
      </div>
    </div>
  );
};
export default Boxer