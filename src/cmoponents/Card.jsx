import seriesData from "../api/seriesData.json";
const Card = () => {
  return (
    <ul>
      {seriesData.map((curEle) => {
        return (
          <li key={curEle.id}>
            <div>
              <img
                width="100px"
                height="100px"
                src={curEle.img_url}
                alt=""
              />
            </div>
            <h2>Series name : {curEle.name}</h2>
            <h3>Rating : {curEle.rating}</h3>
            <p>summary : {curEle.description}</p>
            <h2>Cast : {curEle.cast}</h2>
            <h2>Genre : {curEle.genre}</h2>
            <a href={curEle.watch_url} target="_blank">
              <button>Watch now</button>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Card;
