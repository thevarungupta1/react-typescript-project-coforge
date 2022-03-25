import React from "react";

const Person = () => {
  const names = ["Mark", "Paul", "Watson", "Stacy", "John"];

  return (
    <div>
      <h1>List of Names</h1>
      {/* <ul>
                <li>{ names[0] }</li>
                <li>{ names[1] }</li>
                <li>{ names[2] }</li>
            </ul> */}
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Person;
