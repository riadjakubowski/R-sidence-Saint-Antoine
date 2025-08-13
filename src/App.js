// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Home";
import About from "./components/About";
import Admission from "./components/Admission";
import Careers from "./components/Careers";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
