import React from "react";
import "./App.css";
import Card  from "./cmoponents/Card";
console.log(React.createElement("h1", null, "hello world"));
function App() {
  return (
    <React.Fragment>
      <Card />
      <hr />
      <Card />
       <hr />
      <Card />
    </React.Fragment>
  );
}
export default App;
