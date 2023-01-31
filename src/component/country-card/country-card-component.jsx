import "./country-card-style.css";

const CountryCard = ({ country }) => {
  const { name, flags, population, timezones } = country;
  const { common } = name;
  const { svg } = flags;
  const [time] = timezones;
  return (
    <div className="country-card-container">
      <ul className="country-card">
        <li>
          <img src={svg} alt={common} />
        </li>
        <li>{common}</li>
        <li>{time}</li>
        <li>{population}</li>
      </ul>
      <br />
    </div>
  );
};
export default CountryCard;
