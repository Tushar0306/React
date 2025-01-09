//import logo from "./logo.svg";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Message from "./component/Message";
import Counter from "./component/Counter";
import FunctionClick from "./component/FunctionClick";
import ClassClick from "./component/ClassClick";
import EventBind from "./component/EventBind";
import ParentComponent from "./component/ParentComponent";
import UserGreeting from "./component/UserGreeting";
import NameList from "./component/NameList";
import Stylesheet from "./component/Stylesheet";
import Inline from "./component/Inline";
import "./appStyle.css";
import style from "./appStyle.module.css";
import LifeCycleA from "./component/LifeCycleA";

function App() {
  return (
    <div className="App">
      <h1 className="error">error</h1>
      <h1 className={style.success}>success</h1>
      <LifeCycleA />
      {/* <Stylesheet primary={true} /> */}
      <Inline />
      {/* <Greet />
      <Welcome /> */}
      {/* <Hello /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is a children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" />

      <Welcome name="bruce" heroName="Batman">
        <p>This is a children props in class component</p>
      </Welcome>
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" /> */}

      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greet name="Diana" heroName="Wonder Woman" />
      <Welcome name="Clark" heroName="Superman" /> */}

      {/* <FunctionClick />
      <ClassClick /> */}

      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
    </div>
  );
}

export default App;
