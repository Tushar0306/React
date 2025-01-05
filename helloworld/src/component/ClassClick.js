import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Clicked by Class Component");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Clicked</button>
      </div>
    );
  }
}

export default ClassClick;
