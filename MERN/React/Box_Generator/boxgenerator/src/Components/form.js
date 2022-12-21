import React, { useState } from "react";



const BoxAdder = (props) => {
  const [color, setColor] = useState("red");

  const handleChange = event => {
    setColor(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.setBoxes(props.boxes.concat(color));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input type="text" value={color} onChange={handleChange} />
        </label>
        <input type="submit" value="Add Box" />
      </form>
      


    </div>
  );
};
export default BoxAdder