import React, { useState } from "react";

const World = () => {
  const [name, setName] = useState("Guest");

  function onClickHandler() {
    console.log("button clicked");
    setName("Paul");
  }

  return (
    <div>
      <h1>Welcome {name}</h1>
      <button onClick={onClickHandler}>Login</button>
    </div>
  );
};
export default World;
