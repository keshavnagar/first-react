const Practice = () => {
  const Students = [43];
  return (
    <>
      <div>Interview Question : </div>
      {/* <p>{Students.length && "no student found"}</p> */}

      {/* above line output is 0 , why its 0 , I give reason in source.md file :  */}
      {/* jab and operator lagayenge tab 0 output milega  */}
      {/* <p>{Students.length || "no student found"}</p>  */}
      {/* but jab || ka use karenge to no student found output milega  */}

      <p>{Students.length === 0 && "no student found"}</p>{/*first way to show this becasue if we write like  this then if a student is available then it dont show any thing and if 0 then it show no student fouund one more way to achieve this */}

      <p>{Boolean (!Students.length) && "no student found" }</p>

      {/* iska output no student found hoga , kyuki isme aisa hota hai ki left ki thing right hoti hai to right thing return ho jati hai  */}
{/* 
      <p>{Students.length === 0 || "no student found"}</p> */}
      {/* iska kuch bhi output nahi hoga pata ,  
      Yeh || (OR Operator) Kyun Nahi Chal Raha?
      Students.length === 0 ka value true hoga kyunki Students array empty hai.
      JavaScript ka || operator jab left side me truthy value dekhta hai, toh wahi return kar deta hai.
      Left Side: true (kyunki Students.length === 0 hai).
      Right Side: "no student found" (jo ek string hai).
      || operator true return karega, lekin React true ko render nahi karta, isliye kuch bhi nahi dikh raha.
      */}


      <p>number of student  : {Students.length}</p>
    </>
  );
};

export default Practice;
