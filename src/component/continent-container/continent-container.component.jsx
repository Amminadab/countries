import CountryCard from "../country-card/country-card-component";
import "./continent-container.style.css";

const ContinentContainer = ({ continent }) => {
  const continentName = continent[0].continents[0];

  const imageString = continentName.split(" ");
  const imageNameSeparated = imageString.map((name) =>
    name.toLocaleLowerCase()
  );

  const finalImageName = imageNameSeparated.join("");

  let img = require(`../../asset/${finalImageName}.jpg`);

  return (
    <div className="continent-container">
      <img className="continent-img" src={img} alt={finalImageName} />
      <p className="the-name">{continentName}</p>
      <div className="c-container">
        {continent.map((country) => (
          <CountryCard key={country.name.official} country={country} />
        ))}
      </div>
    </div>
  );
};

export default ContinentContainer;
