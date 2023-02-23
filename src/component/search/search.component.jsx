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

  const [selectedContient, setSelectedContient] = useState("All Continent");

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
    // console.log(specificCountry);
    // console.log(countries);

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

    const buttonToChange = document.getElementById(`${e.target.name}`);
    allContientsNameArray.map((contient) =>
      document.getElementById(`${contient}`).classList.remove("active")
    );
    document.getElementById("All").classList.remove("active");
    buttonToChange.classList.add("active");
    if (e.target.name === "All") {
      setFilteredCountries(countryReference);
      setSpecificCountry(countryReference);
      setSelectedContient("All Continent");
    } else {
      const byContientFilteredCountry = countryReference.filter((country) => {
        // console.log(country.continents[0].toLocaleLowerCase());
        // console.log(e.target.name.toLocaleLowerCase());
        return (
          e.target.name.toLocaleLowerCase() ===
          country.continents[0].toLocaleLowerCase()
        );
      });
      setSpecificCountry([...byContientFilteredCountry]);

      setFilteredCountries(byContientFilteredCountry);
      setSelectedContient(e.target.name);
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
                name={contient}
                id={contient}
                className="country-filter-btn"
                onClick={continentFilter}
              >
                {contient}
              </button>
            ))}
          <button name="All" id="All" onClick={continentFilter}>
            All
          </button>
        </ul>
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
