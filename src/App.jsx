import React from "react";
import "./App.css";
import Card from "./cmoponents/Card";
// import ProfileCard from "./cmoponents/ProfileCard";
// import Profile  from "./cmoponents/Profile";
console.log(React.createElement("h1", null, "hello world"));
const App = () => {
  return (
    <>
      <section className="container">
        <Card />
        {/* <Profile /> */}
      </section>
    </>
  );
};
export default App;
