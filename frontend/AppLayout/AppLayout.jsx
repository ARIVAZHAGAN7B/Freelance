import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Whyus from "../src/Pages/WhyUs/Whyus";
import Testimonals from "../src/Pages/Testimonals/Testimonals";
import BuildNow from "../src/Pages/BuildNow/BuildNow";
import About from "../src/Pages/About/About";
import Error from "../src/error";
import Careers from "../src/Pages/Careers/Careers";
import Crew from "../src/Pages/Crew/Crew";
import Form from '../src/Pages/Form/Form';
import CareersForm from "../src/Components/CareersForm/Careersform"
import Portfolio from '../src/Components/PortFolio/Portfolio';
const AppLayout = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Whyus" element={<Whyus />} />
        <Route path="/testimonals" element={<Testimonals />} />
        <Route path="/build" element={<BuildNow />} />
        <Route path="/about" element={<About />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/form" element={<Form />} />
        <Route path="/careersform" element={<CareersForm />} />
        <Route path="/portfolio/:memberName" element={<Portfolio />} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
};

export default AppLayout;
