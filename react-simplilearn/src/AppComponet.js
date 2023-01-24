import React from "react";
import FC from "./Components/FunctionalComp";
import {ClassComp, ClassComp1} from "./Components/ClassComp";
//import "./App.css";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";

function App() {
  return (
    <div>
      <h1>Hello! Welcome to Duniaya</h1>
      <h1>This is about components</h1>
      <FC />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
      <ParentComp />
    </div>
  );
}
export default App;
