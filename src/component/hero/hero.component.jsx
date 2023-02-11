import globe from "../../asset/globe.png";
import { Link } from "react-router-dom";
import "./hero.style.css";
import "./hero.query.css";

const Hero = () => {
  return (
    <section className="section-hero">
      <img className="hero-img" src={globe} alt="aglobe with flags" />
      <div className="hero-text">
        <h3 className="hero-text-title">
          Country <span>Flags</span>
        </h3>
        <p className="hero-text-description">
          This is a website that provides detailed information about countries,
          including their flags, neighboring countries, uncolonized countries,
          and continents. It is a great resource for learning about countries.
        </p>
        <Link className="get-started-btn" to="/search">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
