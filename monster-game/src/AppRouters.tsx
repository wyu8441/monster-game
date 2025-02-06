import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dialog from "./pages/Dialog";
import Camera from "./pages/Camera";
const AppRouters = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dialog" element={<Dialog />} />
        <Route path="camera" element={<Camera />} />
      </Routes>
    </Router>
  );
};
export default AppRouters;
