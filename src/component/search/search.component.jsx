import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "../../context/countries.context";
import CountriesContainer from "../countries-container/countries-container.component";
import "./search.style.css";
import "./search.query.css";

const Search = () => {
  const { countries } = useContext(CountriesContext);
  // console.log(countries);
  const countryReference = countries;
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchedText, setSearchedText] = useState("");

  const [specificCountry, setSpecificCountry] = useState(countries);

  const [selectedContient, setSelectedContient] = useState("All");

  useEffect(() => {
    setSpecificCountry(countries);
  }, [countries]);

  let allContientsName = new Set([]);

  countries.map((country) => {
    const continentName = country.continents[0];
    allContientsName.add(continentName);
    return 0;
  });

  const allContientsNameArray = [...allContientsName];

  useEffect(() => {
    const newFilteredList = specificCountry.filter((country) => {
      const name = country.name.common.toLocaleLowerCase();
      return name.includes(searchedText.toLocaleLowerCase());
    });
    setFilteredCountries(newFilteredList);
  }, [searchedText, specificCountry, countries]);

  useEffect(() => {
    document.getElementById("All").classList.add("active");
  }, []);

  const continentFilter = (e) => {
    e.preventDefault();
    if (!e.target.name) {
      const buttonToChange = document.getElementById(`${e.target.value}`);
      allContientsNameArray.map((contient) =>
        document.getElementById(`${contient}`).classList.remove("active")
      );

      document.getElementById("All").classList.remove("active");
      buttonToChange.classList.add("active");
      console.log(e.target.name);
    }

    if (e.target.value === "All") {
      setFilteredCountries(countryReference);
      setSpecificCountry(countryReference);
      setSelectedContient("All");
    } else {
      const byContientFilteredCountry = countryReference.filter((country) => {
        return (
          e.target.value.toLocaleLowerCase() ===
          country.continents[0].toLocaleLowerCase()
        );
      });
      setSpecificCountry([...byContientFilteredCountry]);

      setFilteredCountries(byContientFilteredCountry);
      setSelectedContient(e.target.value);
    }
  };

  return (
    <>
      <div className="aligner">
        <p> Filter Continent</p>
        <ul className="filter-list">
          {allContientsNameArray[0] &&
            allContientsNameArray.map((contient) => (
              <button
                key={contient}
                value={contient}
                id={contient}
                className="country-filter-btn"
                onClick={continentFilter}
              >
                {contient}
              </button>
            ))}
          <button
            id="All"
            value="All"
            className="country-filter-btn"
            onClick={continentFilter}
          >
            All
          </button>
        </ul>
        <select
          className="drop-down-contient"
          name="dropdown"
          onChange={continentFilter}
        >
          <option value="All">All</option>
          {allContientsNameArray[0] &&
            allContientsNameArray.map((contient) => (
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

      <section className="section-search">
        <div className="search-block">
          <input
            className="search-box"
            placeholder={`Search From ${selectedContient}`}
            type="search"
            value={searchedText}
            onChange={(event) => {
              setSearchedText(event.target.value);
            }}
          />
        </div>
        <CountriesContainer countries={filteredCountries} />
      </section>
    </>
  );
};
export default Search;
