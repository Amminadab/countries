import { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext({
  countries: 0,
  setCountries: () => {},
});
export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const call = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    call();
  }, []);

  const value = { countries, setCountries };
  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
