import React, { useState, useEffect } from "react";
import Navbar from "./components/Layout/Header/Navbar";
import Body from "./components/Layout/Body/Body";
import Footer from "./components/Layout/Footer/Footer";
import ScrollNavbar from "./components/Layout/Header/ScrollNavbar";
import ScrollToTopButton from "./components/Layout/others/ScrollToTopButton";

function App() {
  const [showScrollNavbar, setShowScrollNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 15) {
      setShowScrollNavbar(true);
    } else {
      setShowScrollNavbar(false);
    }
    
  };

  return (
    <>
      <Navbar />

      {showScrollNavbar && <ScrollNavbar />}

      <Body />

      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
