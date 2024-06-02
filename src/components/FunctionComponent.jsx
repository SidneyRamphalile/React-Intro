import React, { useState } from "react";

const FunctionComponent = ({ name, age, author, setName }) => {
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
        My company is: {name}. It is {age} years old and the author is {author}.
      </h4>
      <input
        value={changeName}
        onChange={(e) => setChangeName(e.target.value)}
        placeholder="Enter new name"
      />
      <button onClick={() => setName(changeName)}>Change name to...</button>
    </div>
  );
};

export default FunctionComponent;

// props:{
//     name: "DevTown",
//     age: 20,
//     author: 'rk'
// }