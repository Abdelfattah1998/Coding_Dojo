import React, { useState } from "react";

const Box = ({ color }) => (
    <div
      style={{
        backgroundColor: color,
        width: "100px",
        height: "100px",
        display: "inline-block",
        margin: "0.5em"
      }}
    />
  );

const Boxer = (props) => {
  return (
    <div>
      <div>
        {props.color.map(x => (
          <Box key={x} color={x} />
        ))}
      </div>
    </div>
  );
};
export default Boxer