const SeriesCard = ({
  curEl: { key, img_url, name, rating, description, cast, genre, watch_url },
}) => {
  return (
      <li className="particular-card" key={key}>
        <div>
          <img className="equalImage" width="101px" height="101px" src={img_url} alt={name} />
        </div>
        <h2>Series name : {name}</h2>
        <h3>Rating : {rating}</h3>
        <p>Summary : {description}</p>
        <h2>Cast : {cast}</h2>
        <h2>Genre : {genre}</h2>
        <a href={watch_url} target="_blank">
          <button>watch now</button>
        </a>
      </li>
  
  );
};

export default SeriesCard;

