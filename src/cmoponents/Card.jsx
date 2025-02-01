import seriesData from "../api/seriesData.json";
const Card = () => {
  return (
    <div>
      <div>
        <img
          width="100px"
          height="100px"
          src={seriesData[0].img_url}
          alt=""
        />
      </div>
      <h2>Series name : {seriesData[0].name}</h2>
      <h3>Rating : {seriesData[0].rating}</h3>
      <p>summary : {seriesData[0].description}</p>
      <h2>Cast : {seriesData[0].cast}</h2>
      <h2>Genre : {seriesData[0].genre}</h2>
    </div>
  );
};
export default Card;
