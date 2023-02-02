import { Routes, Route } from "react-router-dom";
import NotFound from "./layout/not-found/not-found";
import Home from "./route/home/home.component";
import Navigation from "./route/navigation/navigation.component";
import NeighbourCountry from "./route/neighbour-country/neighbour-country.component";
import SearchCountry from "./route/search-country/search-country.component";
import Uncolonized from "./route/uncolonized/uncolonized.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="search" element={<SearchCountry />} />
        <Route path="uncolonized" element={<Uncolonized />} />
        <Route path="neighbour/*" element={<NeighbourCountry />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
