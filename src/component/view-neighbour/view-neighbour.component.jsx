import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext } from "../../context/countries.context";
import CountriesContainer from "../countries-container/countries-container.component";
import "./view-neighbour.style.css";

const ViewNeighbour = () => {
  const { ViewNeighbour } = useParams();

  //importing all countries from context

  const { countries } = useContext(CountriesContext);
  // console.log(countries);

  const [selectedCountryDetail] = countries.filter(
    (country) =>
      country.name.common.toLocaleLowerCase() ===
      ViewNeighbour.toLocaleLowerCase()
  );

  // console.log(selectedCountryDetail);

  const countriesNeighboursList =
    selectedCountryDetail && selectedCountryDetail.borders;

  const NeighbouringCountryFullDetail = countries.filter((country) =>
    countriesNeighboursList.includes(country.cca3)
  );
  console.log(NeighbouringCountryFullDetail);

  return (
    <div className="view-neighbour-contries">
      <h4 className="view-neighbour-header">
        Neighbouring Countries Of{" "}
        <span>{ViewNeighbour.toLocaleUpperCase()}</span>
      </h4>

      <div className="selfNeighbour">
        {selectedCountryDetail && (
          <img
            className="selfNeighbour-img"
            src={selectedCountryDetail.flags.png}
            alt={selectedCountryDetail.name.common}
          />
        )}
      </div>

      {NeighbouringCountryFullDetail && (
        <CountriesContainer countries={NeighbouringCountryFullDetail} />
      )}
    </div>
  );
};
export default ViewNeighbour;
