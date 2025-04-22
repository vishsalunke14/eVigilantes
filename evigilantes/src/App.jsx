import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Aboutus from "./pages/aboutus";
import Blog from "./pages/blog";
import Contactus from "./pages/contactus";
import Features from "./pages/features";
import Home from "./pages/home";
import Privacypolicy from "./pages/privacypolicy";
import Terms from "./pages/terms";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    const Webflow = window.Webflow || [];
    Webflow.push(() => {
      window.Webflow.require("ix2").init();
    });
  }, []);

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer/>
  
        {/* Page content */}
        <ScrollToTop />
  
    </BrowserRouter>
    </>
  );
}

export default App;