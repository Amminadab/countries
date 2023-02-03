import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "../../context/countries.context";
import UncolonizedCard from "../uncolonized-card/uncolonized-card.component";

import "./uncolonized-countries.style.css";

const UncolonizedCounrties = () => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [og, setOg] = useState([]);
  const { uncolonizedCountryList, countries } = useContext(CountriesContext);

  useEffect(() => {
    const uncolonizedCounrtriesData = countries.filter((country) =>
      uncolonizedCountryList.includes(country.name.common)
    );
    if (uncolonizedCounrtriesData) {
      setFilteredCountries(uncolonizedCounrtriesData);
      setOg(uncolonizedCounrtriesData);
    }
  }, [countries, uncolonizedCountryList]);

  const selectedFilter = (event) => {
    event.preventDefault();

    const finalFilteredCountries = og.filter(
      (country) =>
        country.continents[0].toLocaleLowerCase() ===
        event.target.name.toLocaleLowerCase()
    );

    setFilteredCountries(finalFilteredCountries);
  };
  return (
    <>
      <div className="aligner">
        <p>filter by Continent :</p>
        <ul className="filter-list">
          <button name="Africa" onClick={selectedFilter}>
            Africa
          </button>
          <button name="Oceania" onClick={selectedFilter}>
            Oceania
          </button>
          <button name="Asia" onClick={selectedFilter}>
            Asia
          </button>
        </ul>
      </div>

      <div className="uncolonized-countries-container">
        {filteredCountries.map((country) => (
          <UncolonizedCard key={country.name.common} country={country} />
        ))}
      </div>
    </>
  );
};
export default UncolonizedCounrties;
