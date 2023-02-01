import { useContext } from "react";
import { CountriesContext } from "../../context/countries.context";
import "./uncolonized-card.style.css";

const UncolonizedCard = ({ country }) => {
  const { UncolonizedMap } = useContext(CountriesContext);
  const { name, languages, flags } = country;
  const { common } = name;
  const { png } = flags;

  return (
    <div className="uncolonized-card">
      <img className="uncolonized-img" src={png} alt={name} />

      <h2 className="uncolonized-name">{common}</h2>
      <ul className="uncolonized-detail">
        <li>
          <span>language Spoken &nbsp;</span> : &nbsp;&nbsp;
          {Object.values(languages)[0]}
        </li>
        <li>
          <span>Description &nbsp;</span> :&nbsp;&nbsp;{" "}
          {UncolonizedMap.get(common)}
        </li>
      </ul>
    </div>
  );
};
export default UncolonizedCard;
