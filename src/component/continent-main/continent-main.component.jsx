import { useContext } from "react";
import { CountriesContext } from "../../context/countries.context";
import ContinentContainer from "../continent-container/continent-container.component";
import "./continent-main.style.css";

const ContinentMain = () => {
  const { countries } = useContext(CountriesContext);
  //   console.log(countries);

  const ListOfContinents = new Set();

  countries.map((country) => ListOfContinents.add(country.continents[0]));

  const ListOfContinentsArray = [...ListOfContinents];
  const continentsInOrder = ListOfContinentsArray.sort();

  let continentValue = [];
  for (let i = 0; i < continentsInOrder.length; i++) {
    const continent = countries.filter(
      (country) => country.continents[0] === continentsInOrder[i]
    );
    continentValue.push(continent);
  }

  return (
    <div className="container-main">
      {continentValue.map((continent) => (
        <ContinentContainer
          key={continentValue.indexOf(continent)}
          continent={continent}
        />
      ))}
    </div>
  );
};

export default ContinentMain;
