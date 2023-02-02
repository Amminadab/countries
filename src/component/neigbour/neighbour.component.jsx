import { useContext, useState } from "react";
import { CountriesContext } from "../../context/countries.context";
import NeighbourContainer from "../neighbour-cointainer/neighbour-country.component";

const Neighbour = () => {
  const [searchedCountry, setSearchedCountry] = useState("");
  const { countries } = useContext(CountriesContext);

  const countriesWithNeighbour = countries.filter((country) => country.borders);
  // const [filteredNeighbouringCountry, setFilteredNeighbouringCountry] =
  //   useState(countriesWithNeighbour);

  // useEffect(() => {
  const filteredNeighbour = countriesWithNeighbour.filter((country) => {
    const neighbourName = country.name.common.toLocaleLowerCase();
    return neighbourName.includes(searchedCountry.toLocaleLowerCase());
  });
  //   setFilteredNeighbouringCountry(filteredNeighbour);
  // }, [countriesWithNeighbour, searchedCountry]);

  return (
    <section className="section-search">
      <div className="search-block">
        <input
          className="search-box"
          placeholder="Search any country that has Neigbour"
          type="search"
          value={searchedCountry}
          onChange={(event) => {
            setSearchedCountry(event.target.value);
          }}
        />
      </div>
      <NeighbourContainer countries={filteredNeighbour} />
    </section>
  );
};

export default Neighbour;
