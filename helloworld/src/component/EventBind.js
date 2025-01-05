import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "GoodBye",
  //     });
  //     console.log(this);
  //   }

  clickHandler = () => {
    this.setState({
      message: "GoodBye",
    });
  };
  render() {
    // Four ways to use event handler in Binding of This
    //binding in render
    // arrow function in render
    // binding in class constructor
    // class property as arrow function
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
