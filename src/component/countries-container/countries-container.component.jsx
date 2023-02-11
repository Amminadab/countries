import CountryCard from "../country-card/country-card-component";
import "./countries-container.style.css";
import "./countries-container.query.css";

const CountriesContainer = ({ countries }) => {
  return (
    <div className="countries-container">
      {countries.map((country) => (
        <CountryCard key={country.name.official} country={country} />
      ))}
    </div>
  );
};

export default CountriesContainer;
