import "./SeriesCard.css"
const SeriesCard = ({
  curEl: { key, img_url, name, rating, description, cast, genre, watch_url },
}) => {

  const btn_style = {border:"none",
    padding: "1rem",
    fontSize : "1rem",
    backgroundColor : `${rating >= 8.5 ? " aquamarine" : " rgb(114, 117, 116)"}`,
    color : "white"
  }
    const conditional_style = rating>=8.5 ? "superhit" : "average";
  
  return (
    <li className="particular-card" key={key}>
      <div>
        <img
          className="equalImage"
          width="101px"
          height="101px"
          src={img_url}
          alt={name}
        />
      </div>
      <div className="card-content">
        <h2>Series name : {name}</h2>
        <p style={{fontSize : "2rem"}}  >Rating : <span  className= {`daily ${conditional_style}`} >{rating}</span></p>
        <p >Summary : {description}</p>
        <p>Cast : {cast}</p>
        <p>Genre : {genre}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_style} className={ `  ${conditional_style}` }  >watch now</button>
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
