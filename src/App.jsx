import React from "react";
import "./App.css";
import Card , {Header,Footer} from "./cmoponents/Card";
console.log(React.createElement("h1", null, "hello world"));
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Card />
      <hr />
      <Card />
       <hr />
      <Card />
      <Footer></Footer>
    </React.Fragment>
  );
}
export default App;
