'use client';

import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Hero from "@/Components/Hero";
import React, { useState } from "react";
import About from "@/Components/About";

const HomePage = () => {
  
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

    return (
      <div className="overflow-x-hidden">
        <div>
          {/* navbar section */}
          <MobileNav nav={nav} closeNav={closeNav} />
          <Nav openNav={openNav} />
          {/* hero section */}
          <Hero />
          {/* About */}
          <div className="relative z-[30]">
            <About />
          </div>
        </div>
      </div>
    );
};

export default HomePage;