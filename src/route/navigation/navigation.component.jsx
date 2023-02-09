import logo from "../../asset/globe-logo.png";
import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

import "./navigation.style.css";
import "./navigation.query.scss";
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const navCLickHandler = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="nav header__content">
          <>
            <img
              className="nav-logo header__content__logo"
              src={logo}
              alt="globe logo"
            />
            <Link className="new-nav" to="/">
              <p className="nav-text">
                <span>Countries</span>
              </p>
            </Link>
          </>
          <nav
            className={`${"header__content__nav nav-links"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
          >
            <ul className="nav-links-container">
              <li>
                <Link className="nav-link" onClick={navCLickHandler} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  onClick={navCLickHandler}
                  to="/search"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  onClick={navCLickHandler}
                  to="/uncolonized"
                >
                  Uncolonized
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  onClick={navCLickHandler}
                  to="/neighbour"
                >
                  Neighbour
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  onClick={navCLickHandler}
                  to="/continent"
                >
                  Continent
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__content__toggle">
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default Navigation;
