'use client';

import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Hero from "@/Components/Hero";
import React, { useState } from "react";
import About from "@/Components/About";
import Service from "@/Components/Services";
import Skills  from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Testimonial from "@/Components/Testimonial";
import Blogs from "@/Components/Blogs";

const HomePage = () => {
  
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const openNav = () => setIsNavOpen(true);
  // const closeNav = () => setNav(false);

    return (
      <div className="overflow-x-hidden">
        <div>
          {/* navbar section */}
          <div>
            <button onClick={toggleNav}>Toggle Navigation</button>
            <MobileNav isNavOpen={isNavOpen} toggleNav={toggleNav} />
          </div>
          {/* <MobileNav nav={nav} closeNav={closeNav} /> */}
          <Nav openNav={openNav} />
          {/* hero section */}
          <Hero />
          {/* About */}
          <div className="relative z-[30]">
            <About />
            <Service />
            <Skills />
            <Projects />
            <Testimonial />
            <Blogs />
          </div>
        </div>
      </div>
    );
};

export default HomePage;