// Class Component

import React from "react";
import { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props; // destructuring the props in Class Component
    //const { state1, state2 } = this.state; // destructuring the state in class Component
    return (
      <div>
        <h1>
          Class {name} a.k.a {heroName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
