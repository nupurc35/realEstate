import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../pages/Properties";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
    </Routes>
  );
}