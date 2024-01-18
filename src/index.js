import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./app/about/about";
import Projects from "./app/projects/projects";
import Navbar from "./Components/navbar";
import reportWebVitals from "./reportWebVitals";
import { AnimatePresence } from "framer-motion";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <AnimatePresence>
       <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />}  />
        <Route path="/contact" element={<div>Contact Page Content</div>} />
        <Route path="/faq" element={<div>FAQ Page Content</div>} />
      </Routes>
      </AnimatePresence>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
