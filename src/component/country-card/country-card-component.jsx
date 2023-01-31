import "./country-card-style.css";

const CountryCard = ({ country }) => {
  const { name, flags, population, timezones, currencies } = country;
  const { common } = name;
  const { png } = flags;
  const [time] = timezones;

  return (
    <div className="country-card-container">
      <img className="country-img" src={png} alt={common} />
      <h4 className="country-name">{common}</h4>
      <ul className="country-card">
        <li>⏳&nbsp;&nbsp;&nbsp;{time}</li>
        <li>🚶‍♂️&nbsp;&nbsp;&nbsp;{population}</li>
        <li>
          💰&nbsp;&nbsp;&nbsp;
          {currencies && Object.values(currencies)[0].symbol}
        </li>

        {/* Object.keys(currencies)[0].symbol */}
      </ul>
      <br />
    </div>
  );
};
export default CountryCard;
