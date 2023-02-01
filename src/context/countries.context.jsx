import { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext({
  countries: 0,
  setCountries: () => {},
  uncolonizedCountryList: [],
  UncolonizedMap: [],
});
export const CountriesProvider = ({ children }) => {
  const uncolonizedCountryList = [
    "Ethiopia",
    "Liberia",
    "Japan",
    "Thailand",
    "Bhutan",
    "Bhutan",
    "Nepal",
    "Tonga",
    "China",
    "North Korea",
    "South Korea",
    "Mongolia",
  ];

  const UncolonizedMap = new Map();
  UncolonizedMap.set(
    "Ethiopia",
    "Ethiopia is Africa's oldest independent country and its second largest in terms of population. Apart from a five-year occupation by Mussolini's Italy."
  );
  UncolonizedMap.set(
    "Liberia",
    "The sovereign nation of ​Liberia is often described as never colonized because it was created so recently, in 1847. Liberia was founded by Americans in 1821"
  );
  UncolonizedMap.set(
    "Japan",
    "Japan was not formally colonized by Western powers, but was a colonizer itself. It has, however, experienced formal semicolonial situations."
  );
  UncolonizedMap.set(
    "Thailand",
    "Thailand has never been colonialized by the Europeans or any other country. Therefore, the country did not have any beginning or ending to the colonial era."
  );
  UncolonizedMap.set(
    "Bhutan",
    "The independence of Bhutan has endured for centuries and it has never been colonized in its history. The Bhutanese state developed a distinct national identity"
  );
  UncolonizedMap.set(
    "Iran",
    "Iran was never colonized by European powers, but this did not protect it from the colonial reach of the United Kingdom. In the late nineteenth century, "
  );
  UncolonizedMap.set(
    "Nepal",
    "Although Nepal has never been formally colonised, its history and the present show the political influence, cultural assimilation and acculturation."
  );
  UncolonizedMap.set(
    "Tonga",
    "A former British protectorate, Tonga became fully independent in 1970, although it was never formally colonised."
  );
  UncolonizedMap.set(
    "China",
    " China was never formally colonized, but the Opium Wars of 1839-1842 and 1856-1860 were fought to ensure that British opium merchants had access to Chinese markets."
  );
  UncolonizedMap.set(
    "North Korea",
    "In 1910, Korea was annexed by the Empire of Japan. In 1945, after the Japanese surrender at the end of World War II, Korea was divided into two zones along the 38th parallel."
  );
  UncolonizedMap.set(
    "South Korea",
    "Unlike many other countries in Asia, Korea was colonized not by Western imperialist powers in the late 1800s and early 1900s but by Japan, an Asian imperialist power."
  );
  UncolonizedMap.set(
    "Mongolia",
    "The Mongol empire eventually collapsed and split up, and from 1691 northern Mongolia was colonized by Qing (Manchu) China. With the collapse of Qing rule "
  );

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const call = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    call();
  }, []);

  const value = {
    countries,
    setCountries,
    uncolonizedCountryList,
    UncolonizedMap,
  };
  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
