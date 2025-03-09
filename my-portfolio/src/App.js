import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Publish from "./Pages/Publish";
import Contact from "./Pages/Contact";
import { Box } from "@mui/material";
import ScrollToTopButton from "./Pages/ScrollToTopButton";

const App = () => (
  <Router>
    <Navbar />
    <Box sx={{ mt: 2 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton/>
    </Box>
  </Router>
);

export default App;
