import { useContext } from "react";
import { CountriesContext } from "../../context/countries.context";
import UncolonizedCard from "../uncolonized-card/uncolonized-card.component";

import "./uncolonized-countries.style.css";

const UncolonizedCounrties = () => {
  const { uncolonizedCountryList, countries } = useContext(CountriesContext);

  const uncolonizedCounrtriesData = countries.filter((country) =>
    uncolonizedCountryList.includes(country.name.common)
  );
  // console.log(uncolonizedCounrtriesData, UncolonizedMap);
  return (
    <div className="uncolonized-countries-container">
      {uncolonizedCounrtriesData.map((country) => (
        <UncolonizedCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};
export default UncolonizedCounrties;
