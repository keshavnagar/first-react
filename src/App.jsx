import React from "react";
import "./App.css";
import "./cmoponents/Card.css"
import Card from "./cmoponents/Card";
// import ProfileCard from "./cmoponents/ProfileCard";
// import Profile  from "./cmoponents/Profile";
console.log(React.createElement("h1", null, "hello world"));
const App = () => {
  return (
    <>
      <section className="container">
        <h1 className="card-heading">List of Best series on netflix</h1>
        <Card />
        {/* <Profile /> */}
      </section>
    </>
  );
};
export default App;
