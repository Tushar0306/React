import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    //////   Conditional Rendering (Four Types)

    // Short Circuit Operator

    return this.state.isLoggedIn && <div>Welcome Tushar</div>;

    // Ternary Conditional Operator

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Tushar</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // Element Variables

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Tushar</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    // If-Else

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Tushar</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Tushar</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
