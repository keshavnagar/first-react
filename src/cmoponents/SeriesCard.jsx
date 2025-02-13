
const SeriesCard = ({ curEl }) => {
  return (
    <li key={curEl.id}>
      <div>
        <img width="101px" height="101px" src={curEl.img_url} alt="" />
      </div>
      <h2>Series name : {curEl.name}</h2>
      <h3>Rating : {curEl.rating}</h3>
      <p>Summary : {curEl.description}</p>
      <h2>Cast : {curEl.cast}</h2>
      <h2>Genre : {curEl.genre}</h2>
      <a href={curEl.watch_url} target="_blank">
        <button>watch now</button>
      </a>
    </li>
  );
};

export default SeriesCard;
