import { Routes, Route } from "react-router-dom";
import Home from "./route/home/home.component";
import Navigation from "./route/navigation/navigation.component";
import SearchCountry from "./route/search-country/search-country.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="search" element={<SearchCountry />} />
      </Route>
    </Routes>
  );
}

export default App;
