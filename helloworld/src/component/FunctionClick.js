import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Clicked by Functional Component");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
