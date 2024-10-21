import React from "react";

const data = [
  {
    id: 1,
    name: "abc",
  },
  {
    id: 2,
    name: "xyz",
  },
  {
    id: 3,
    name: "faiz",
  },
];

const App = () => {
  return (
    <div id="main">
      <ol key={"relativeList"}>
        {data.map((curr) => {
          return <li key={curr.id}>{curr.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
