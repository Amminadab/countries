import { Route, Routes } from "react-router-dom";
import Neighbour from "../neigbour/neighbour.component";
import ViewNeighbour from "../view-neighbour/view-neighbour.component";

const NeighbourParent = () => {
  return (
    <Routes>
      <Route index element={<Neighbour />} />
      <Route path=":ViewNeighbour" element={<ViewNeighbour />} />
    </Routes>
  );
};
export default NeighbourParent;
