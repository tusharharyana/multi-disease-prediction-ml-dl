import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Diabetes from "./pages/Diabetes";
import HeartDisease from "./pages/HeartDisease";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diabetes" element={<Diabetes />} />
        <Route path="/heart" element={<HeartDisease />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
