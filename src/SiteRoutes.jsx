import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Tarih from "./pages/Tarih";
import Contact from "./pages/Contact";
import Population from "./pages/Populations";
import History from "./pages/History";
function SiteRoutes({ data }) {
  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/about" element={<About />} />
      <Route path="/population" element={<Population />} />
      <Route path="/history" element={<History />} />
      <Route path="/Tarih" element={<Tarih data={data} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
