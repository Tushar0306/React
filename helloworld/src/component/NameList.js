import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 40,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 35,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 30,
      skill: "Vue",
    },
  ];

  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
