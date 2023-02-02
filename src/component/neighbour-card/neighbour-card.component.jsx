import { Link } from "react-router-dom";

const NeighbourCard = ({ country }) => {
  const { name, flags, region, capital, independent, unMember, borders } =
    country;
  const { common } = name;
  const { png } = flags;
  const numberOfNeighbours = borders.length;

  let currentDependencyStatus = "Dependent";
  if (independent) currentDependencyStatus = "Independent";

  let membershipStatus = "Not_UN_Member";
  if (unMember) membershipStatus = "UN_Member";

  return (
    <div className="country-card-container">
      <img className="country-img" src={png} alt={common} />
      <h4 className="country-name">{common}</h4>
      <span className="tag-container">
        <p className={`${currentDependencyStatus} tag`}>
          {currentDependencyStatus}
        </p>
        <p className={`${membershipStatus} tag`}>{membershipStatus}</p>
      </span>
      <ul className="country-card">
        <li>🏛 Capital:{capital && capital[0]}</li>
        <li>📍 Region&nbsp;&nbsp; : &nbsp;{region}</li>
        {/* Object.keys(currencies)[0].symbol */}
      </ul>
      <Link to={`/neighbour/${common}`} className="neighbour-btn">
        View {numberOfNeighbours} Neghbours
      </Link>
      <br />
    </div>
  );
};
export default NeighbourCard;
