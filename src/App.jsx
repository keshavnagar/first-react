import React from "react";
import "./App.css";
console.log(React.createElement("h1", null, "hello world"));

// ye jo upar console.log wali line likhi hai iska means hai virtual dom

// dekho in sab things jo bhi mene is file me likhi hai ki kitni steps se hokar apna code render hota hai like sabse pahle apan ne jsx me direact heading likhdi

// fir vo heading kuch React.createelemtnt ki sahayta se bts likh sakte hia

// fir apan ne dkeho ki console.log ki help se ki vo jo apan ne React.createelemtn ke help se likha vo ek object or virtual dom dikhta hai

// fir apan vo ek React.element banata hai jisme uskei type h1 , ops and key vagreah hoti hai ye sab bts hai

// and bas apne ko itna hi samjhna hai baki revise karlega to samajh ajayega

// bas aur apna ui render ho jayega

function App() {
  // return  React.createElement("h1",null,"hello world")
  // <>
  {
    /* <h1>Hello world</h1> */
  }

  {
    /* above wala jo likha hai vo to apan direct likh rahe hai but iske piche kya ho raha hai vo me niche likh raha hu  */
  }

  {
    /* </> */
  }

  // now we write our react.createElement code into console.log okay to check react dom or virtual dom thing

  // return <h1>hello world</h1>

  return (
    //  [<Card key="1"/>,<Card key="2"/>,<Card key="3"/>,<Card key="4"/>]

    <React.Fragment>
      <Card/>
      <Card/>
     
      <Card/>
    </React.Fragment>
    // yaha par jo hamne ek div banaya hai iske andar bahut sara content likha means ye ek hamne ek card bana diya okay , ab hamen aise 5 cards banane ho to ham kya karenge inhe copy paste karnege 5 times but uski jagah ham iska ek component bana dete hai and usko ham 5 bar yaha likh dete hai to vo chij achi hogi rahter than iske okay.

    // ab dekho jaise ki hamen yaha card component ka use kiya to kitna saf suthra dikh raha hai na code bas yehi fayda hai component ka ye dynamic honge but abhi ke liye bas itna yad rakho ki ye saf suthra pan late hai apke code me.

    // now we will understand fragment in react :
    // so when we write any div or any tag in the react it converts into js with the help of dom tree and every element convert into node so when we write components into one div its valid but when we return these all componets without one parent div its not valid so the main picture is how we write components without that one extra div because if we write a extra div a extra node maded

    // so for this we write these components into array

    // one more thing is you also inspect the code and see what is behind the picture like when you now see the inspect you see the components are in the one div

    // but after you write components in one array it is not available

    // to ise ham kahte hai array ki help se hamene vo extra div eliminate kar diya but this way is also a hactic way so we use react.fragment way so please look that

    // so react framgment is aloso a good way to write these things 
    
  );
}

const Card = () => {
  const series_name = "the_stressful_story";
  const rating = "9";
  const summary = "this story is so boring means it like a depressed things and so on i dont know why we watch this";
  const returnGenre = () => {
    const genre = "RomCom"
    return genre;
  }

  const functionCall = () => {
    const vari = "mithu mithu tota";
    return vari;
  }
  const age = 9;

  if(age < 18 ){
    return (
      <div>
        <div>
          <img
            /*style={ {width : "200px", height: "200px"}}*/ width="100px"
            height="100px"
            src="ticket-2974645_1280.jpg"
            alt=""
          />
        </div>
        <h2>Series name : {series_name}</h2>
        <h3>Rating : {5+3+8.1}</h3>
        <p>
          summary : {summary}
        </p>
        <p>
          genre : {returnGenre()}
         
        </p>
        <p>
        tota : {functionCall()}
        </p>
         
        <p>{age >= 18 ? "major" : "minor"}</p>
        <p>{age>=18 && "you can vote"}</p>
        <button>content is not for you </button>
      </div>
    );
  }

  else {

    return (
      <div>
        <div>
          <img
            /*style={ {width : "200px", height: "200px"}}*/ width="100px"
            height="100px"
            src="ticket-2974645_1280.jpg"
            alt=""
          />
        </div>
        <h2>Series name : {series_name}</h2>
        <h3>Rating : {5+3+8.1}</h3>
        <p>
          summary : {summary}
        </p>
        <p>
          genre : {returnGenre()}
         
        </p>
        <p>
        tota : {functionCall()}
        </p>
         
        <p>{age >= 18 ? "major" : "minor"}</p>
        <p>{age>=18 && "you can vote"}</p>
        <button>content for you </button>
      </div>
    );
  }
  
};

export default App;

// aaj ke liye itna hi


// dynamic values in jsx : 

// we can add any variables of our component in jsx using {} syntax.

// function MyComponent(){
// const value = "hello";
// return <p>{value}</p>;
// }

// jsx allows you to write js expressions inside curly brace includes operations, function calls , js expressions produce a value.

// return <div> the result is : {1+2+3} </div>

// so first we seen the variable which declare dynamically and then we use as a props and we also do operatoins in curly braces like plus minus and so on 

// conditional rendering in jsx : 

// we can either reutnr a jsx early or you can use ternary operators for conditionals in jsx.

// return <p> {age >= 18 ? "major" : "minor"}</p>

// return <p> {age > = 18 && "you can vote "}</p>

// return <p> {username || "Guest"}</p>




