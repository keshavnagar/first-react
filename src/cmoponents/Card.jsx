 const Card = () => {
    const series_name = "the_stressful_story";
    const rating = "9";
    const summary =
      "this story is so boring means it like a depressed things and so on i dont know why we watch this";
    return (
      <div>
        <div>
          <img
             width="100px"
            height="100px"
            src="ticket-2974645_1280.jpg"
            alt=""
          />
        </div>
        <h2>Series name : {series_name}</h2>
        <h3>Rating : {rating}</h3>
        <p>summary : {summary}</p>

      </div>
    );
  };

  export default Card; 

  export const Footer = () =>{
    return(

        <>
        <div>
            copyright @keshav
        </div>
        </>

    )
    
  }


  export const Header = () =>{
    return(

        <>
        <div>
            Homepage
        </div>
        </>

    )
}
