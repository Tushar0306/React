import React from "react";

function Hello() {
  return (
    //using JSX (Javascript XML)
    <div className="hello">
      <h1>Hello Tushar</h1>
    </div>

    //without JSX
    //     React.createElement(
    //       "div",
    //       { id: "node", className: "root" },
    //       React.createElement("h1", null, "Hello Tushar")
    //     )
  );
}

export default Hello;
