import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home.js";
import About from "../Components/Pages/About.js";
import Project from "../Components/Pages/Work.js";
import Contact from "../Components/Pages/Contact.js";
import Social from "../Components/Pages/Social.js";
import Header from "./Header";

export default function Router() {
    return (
      <BrowserRouter>
        <Header
          home="Home"
          about="About"
          contact="Contact"
          work="Project"
          onu="Social"   
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/work" element={<Project/>} />
          <Route path="/Onu" element={<Social />} />
        </Routes>
      </BrowserRouter>
    );
  }
  