import React, { useState } from "react";
import BaseHoc from "../hoc/BaseHoc";

const FunctionComponent = (props) => {
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState("");
  const reduceCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>This is a Functional Component</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to increment/add by 1
      </button>
      <br /> <br />
      <button onClick={reduceCount}>Click here to decrement</button>
      <h2>{count}</h2>
      <h4>
        My company is: {props.name}. It is {props.age} years old and the author is {props.author}.
      </h4>
      <input
        value={changeName}
        onChange={(e) => setChangeName(e.target.value)}
        placeholder="Enter new name"
      />
      <button onClick={() => props.setName(changeName)}>Change name to...</button>
    </div>
  );
};

export default BaseHoc(FunctionComponent);

// props:{
//     name: "DevTown",
//     age: 20,
//     author: 'rk'
// }