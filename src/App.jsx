import React from "react";
import "./App.css";
import Card  from "./cmoponents/Card";
console.log(React.createElement("h1", null, "hello world"));
const App = () => {
  return (
    <React.Fragment>
      <Card />
    </React.Fragment>
  );
}
export default App;
