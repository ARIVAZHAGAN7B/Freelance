import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Clientel from "../src/Pages/Clientel/Clientel";
import Testimonals from "../src/Pages/Testimonals/Testimonals";
import BuildNow from "../src/Pages/BuildNow/BuildNow";
import About from "../src/Pages/About/About";
import Error from "../src/error";

const AppLayout = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientel" element={<Clientel />} />
        <Route path="/testimonals" element={<Testimonals />} />
        <Route path="/build" element={<BuildNow />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
};

export default AppLayout;
