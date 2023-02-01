import "./country-card-style.css";

const CountryCard = ({ country }) => {
  const { name, flags, population, timezones, currencies } = country;
  const { common } = name;
  const { png } = flags;
  const [time] = timezones;

  const abbreviateNumber = (value) => {
    let newValue = value;
    if (value >= 1000) {
      let suffixes = ["", " K", " M", " B", " T"];
      let suffixNum = Math.floor(("" + value).length / 3);
      let shortValue = "";
      for (let precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum !== 0
            ? value / Math.pow(1000, suffixNum)
            : value
          ).toPrecision(precision)
        );
        let dotLessShortValue = (shortValue + "").replace(
          /[^a-zA-Z 0-9]+/g,
          ""
        );
        if (dotLessShortValue.length <= 2) {
          break;
        }
      }
      if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
      newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
  };

  return (
    <div className="country-card-container">
      <img className="country-img" src={png} alt={common} />
      <h4 className="country-name">{common}</h4>
      <ul className="country-card">
        <li>⏳&nbsp;&nbsp;&nbsp;{time}</li>
        <li>🚶‍♂️&nbsp;&nbsp;&nbsp;{abbreviateNumber(population)}</li>
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
