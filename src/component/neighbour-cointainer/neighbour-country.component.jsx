import NeighbourCard from "../neighbour-card/neighbour-card.component";

const NeighbourContainer = ({ countries }) => {
  return (
    <div className="countries-container">
      {countries.map((country) => (
        <NeighbourCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default NeighbourContainer;
