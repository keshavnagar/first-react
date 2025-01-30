const Practice = () => {
    const Students = [];
  return (
    <>
      <div>Interview Question : </div>
      <p>{Students.length && "no student found"}</p>
      {/* above line output is 0 , why its 0 , I give reason in source.md file :  */}
      {/* jab and operator lagayenge tab 0 output milega  */}
      <p>student length : {Students.length}</p>
      
    </>
  );
};

export default Practice;
