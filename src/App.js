import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import Series from "./pages/Series/Series";
import Movies from "./pages/Movies/Movies";
import Notfound from "./pages/404";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movie" element={<Movies />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
