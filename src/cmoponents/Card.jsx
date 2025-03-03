import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
const Card = () => {
  return (
    <ul className="cards grid grid-three-cols">
      {seriesData.map((curEl) => 
        <SeriesCard  key={curEl.id} curEl={curEl} />
      )}
    </ul>
  );
};
export default Card;
