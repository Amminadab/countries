import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "../../context/countries.context";
import UncolonizedCard from "../uncolonized-card/uncolonized-card.component";

import "./uncolonized-countries.style.css";
import "./uncolonized-countries.query.css";

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

  const uncolonizedContientSet = new Set(
    og.map((conteinet) => conteinet.continents[0])
  );
  const uncolonizedContientArray = [...uncolonizedContientSet];

  useEffect(() => {
    document.getElementById("All").classList.add("active");
  }, []);

  const selectedFilter = (event) => {
    event.preventDefault();

    const buttonToChange = document.getElementById(`${event.target.value}`);
    uncolonizedContientArray.map((contient) =>
      document.getElementById(`${contient}`).classList.remove("active")
    );

    document.getElementById("All").classList.remove("active");
    buttonToChange.classList.add("active");

    let finalFilteredCountries;

    if (event.target.value === "All") {
      finalFilteredCountries = og;
    } else {
      finalFilteredCountries = og.filter(
        (country) =>
          country.continents[0].toLocaleLowerCase() ===
          event.target.value.toLocaleLowerCase()
      );
    }
    setFilteredCountries(finalFilteredCountries);
  };
  return (
    <>
      <div className="aligner">
        <p> Filter By Continent</p>
        <ul className="filter-list uncolonized-buttons">
          {uncolonizedContientArray.map((contient) => (
            <button
              name={contient}
              key={contient}
              id={contient}
              value={contient}
              onClick={selectedFilter}
            >
              {contient}
            </button>
          ))}
          <button name="All" id="All" value="All" onClick={selectedFilter}>
            All
          </button>
        </ul>
        <select
          className="drop-down-uncolonized"
          name="dropdown"
          onChange={selectedFilter}
        >
          <option value="All">All</option>
          {uncolonizedContientArray[0] &&
            uncolonizedContientArray.map((contient) => (
              <option
                key={contient}
                value={contient}
                id={contient}
                name={contient}
              >
                {contient}
              </option>
            ))}
        </select>
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
