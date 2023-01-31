import logo from "../../asset/globe-logo.png";
import { Link, Outlet } from "react-router-dom";

import "./navigation.style.css";

const Navigation = () => {
  return (
    <>
      <header>
        <div className="nav">
          <div className="logo-block">
            <img className="nav-logo" src={logo} alt="globe logo" />
            <p className="nav-text">Countries</p>
          </div>
          <div className="nav-links">
            <ul className="nav-links-container">
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/search">
                  Search
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/uncolonized">
                  Uncolonized
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/neighbour">
                  Neighbour
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/continent">
                  Continent
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default Navigation;
