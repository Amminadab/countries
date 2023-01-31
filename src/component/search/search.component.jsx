import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "../../context/countries.context";
import CountriesContainer from "../countries-container/countries-container.component";
import "./search.style.css";

const Search = () => {
  const { countries } = useContext(CountriesContext);
  // console.log(countries);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchedText, setSearchedText] = useState("");

  useEffect(() => {
    const newFilteredList = countries.filter((country) => {
      const name = country.name.common.toLocaleLowerCase();
      return name.includes(searchedText.toLocaleLowerCase());
    });
    setFilteredCountries(newFilteredList);
  }, [countries, searchedText]);

  return (
    <section className="section-search">
      <div className="search-block">
        <input
          className="search-box"
          placeholder="Search any country"
          type="search"
          value={searchedText}
          onChange={(event) => {
            setSearchedText(event.target.value);
          }}
        />
      </div>
      <CountriesContainer countries={filteredCountries} />
    </section>
  );
};
export default Search;
