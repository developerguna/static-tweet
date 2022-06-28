import React, { useState, useReducer, useContext, useEffect } from "react";
import "./hookstable.scss";
import LifecycleDemo from "../LifeCycleComponent/lifecycle";
import HOCMain from "../HOC/FirstHOC/app";



const Hooks = () => {
  return (
   
    <div id="hooks" className="HooksConcept">
      <IncDecResWithReducer />
      <IncDecRes />
      <ContextTheme />
      <UpdateTitle />
      <LifecycleDemo />
      <HOCMain />
     {/*  <AnimatedSquare/> */}
    </div>
  );
};

const IncDecRes = () => {
  const [count, setCount] = useState(0);

  const switchHandleINC = () => {
    return setCount((previousCount) => previousCount + 1);
  };
  const switchHandleDEC = () => {
    return setCount((previousCount) => previousCount - 1);
  };
  const switchHandleRES = () => {
    return setCount((previousCount) => 0);
  };

  return (
    <div>
      <table className="hookstable">
        <thead>
          <tr>
            <th>Without Reducer</th>
          </tr>
          <tr>
            <th>
              <h2>{count}</h2>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr onClick={switchHandleINC}>
            <td>+</td>
          </tr>
          <tr onClick={switchHandleDEC}>
            <td>-</td>
          </tr>
          <tr onClick={switchHandleRES}>
            <td>Reset</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const IncDecResWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <table className="Withreducer hookstable">
        <thead>
          <tr>
            <th>With Reducer</th>
          </tr>
          <tr>
            <th>
              {" "}
              <h2> {state.count}</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => dispatch({ type: "increment" })}>
            <td>+</td>
          </tr>
          <tr onClick={() => dispatch({ type: "decrement" })}>
            <td>-</td>
          </tr>
          <tr>
            <td>Reset</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Context = React.createContext(["hello", () => {}]);

const Toolbar = () => {
  const mycontext = useContext(Context);
  return (
    <div>
      {mycontext.map((item) => (
        <ToolbarContent key={item.name} name={item.name} age={item.age} />
      ))}
    </div>
  );
};

const ToolbarContent = (props) => {
  return (
    <table className="contexttheme">
      <thead>
        <tr>
          <th>Context Theme</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h2>{props.name}</h2>
          </td>
        </tr>
        <tr>
          <td>
            <p>{props.age}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const ContextTheme = () => {
  let variable = [
    { name: "Palguna", age: 24 },
    { name: "dhana", age: 23 },
    { name: "chowdy", age: 24 },
  ];

  return (
    <Context.Provider value={variable}>
      <Toolbar />
    </Context.Provider>
  );
};

const UpdateTitle = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count}`;
  });

  return (
    <div>
      <p>You clicked this {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Hooks;

