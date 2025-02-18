const SeriesCard = (props) => {
  return (
    <li key={props.key}>
      <div>
        <img
          width="101px"
          height="101px"
          src={props.curEl.img_url}
          alt={props.curEl.name}
        />
      </div>
      <h2>Series name : {props.curEl.name}</h2>
      <h3>Rating : {props.curEl.rating}</h3>
      <p>Summary : {props.curEl.description}</p>
      <h2>Cast : {props.curEl.cast}</h2>
      <h2>Genre : {props.curEl.genre}</h2>
      <a href={props.curEl.watch_url} target="_blank">
        <button>watch now</button>
      </a>
    </li>
  );
};

export default SeriesCard;
