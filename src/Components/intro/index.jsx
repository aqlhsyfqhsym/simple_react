import React, { useState, useEffect } from "react";


export default function Intro({ children }) {
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position on scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container">
      <div
        className="parallaxContent"
        style={{ transform: `translateY(-${scrollY * 0.2}px)` }}
      >
        <div className="leftHeader">
          <h2>Front-End Developer</h2>
          <h1>Code Design</h1>
          <h2>Design Trailblazer</h2>
          <span>i do really love code when it works</span>
 
          {children}
        </div>
      </div>
    </div>
  );
}
