1️⃣ import React from "react";
👉 React import ho raha hai jo ki JSX ko JavaScript me convert karne ke liye jaruri hai.
👉 JSX internally React.createElement() ke through HTML elements create karta hai.

2️⃣ import "./App.css";
👉 CSS file import ho rahi hai jo is component ke styling ke liye use hogi.

3️⃣ import Card from "./components/Card";
👉 Card ek alag component hai, jo ./components/Card.js file me hoga.
👉 Isko App.js ke andar use karne ke liye import kiya gaya hai.

4️⃣ console.log(React.createElement("h1", null, "hello world"));
👉 Ye React ka core function (React.createElement) ko test kar raha hai.
👉 JSX ka equivalent code:

jsx
Copy
Edit
<h1>hello world</h1>
React internally React.createElement() ko use karta hai JSX ko JavaScript me convert karne ke liye.
Ye console.log() me check karega ki React ka element kaise dikhta hai.
5️⃣ function App() { return (...); }
👉 App ek React Functional Component hai jo UI return karta hai.

6️⃣ <React.Fragment> <Card /> </React.Fragment>
👉 React.Fragment ka use kiya gaya hai jo ek invisible wrapper hai.
👉 Iska kaam sirf multiple components ko ek saath group karna hota hai bina extra div add kiye.
👉 Internally iska koi HTML output nahi hota, sirf grouping ke liye hota hai.

7️⃣ <Card />
👉 Ye Card component ka instance hai, jo ./components/Card.js file me defined hoga.
👉 Jab App.js render hoga, tab React Card component ko call karega aur jo bhi Card.js return karega, wo App ke andar inject ho jayega.

8️⃣ export default App;
👉 Ye App component ko export kar raha hai taki baaki files me isko use kiya ja sake (main.jsx ya kisi aur component me).

