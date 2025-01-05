// Functional Component

import React from "react";

// function Greet() {
//   return <h1>Hello Tushar</h1>;
// }

const Greet = (props) => {
  const { name, heroName } = props; // Destructuring  the  props in Functional Component
  // console.log(props);
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};
// Named Export
// the component name is same as the declared Variable name in given functional component

export default Greet;
