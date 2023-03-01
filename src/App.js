import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
