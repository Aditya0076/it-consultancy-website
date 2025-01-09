// src/App.js
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/Portfolio";
import Contact from "./pages/Contact";
import FooterComponent from "./components/Footer";
import { Helmet } from "react-helmet";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <Helmet>
        <title>Syntax Threads Generation</title>
        <link
          rel="icon"
          type="image/png"
          href="/assets/superai-image-1735128080093.png"
        />
      </Helmet>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main
        className={`min-h-screen ${
          isDarkMode
            ? "bg-gray-700"
            : "bg-gradient-to-r from-green-400 to-blue-500"
        } transition-colors duration-300`}>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route
            path="/about"
            element={
              <div className="container mx-auto px-4 py-8 pb-36 dark:bg-gray-700">
                <About />
              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div className="container mx-auto px-4 py-8 pb-36 dark:bg-gray-700">
                <ServicesPage />
              </div>
            }
          />
          <Route
            path="/portfolio"
            element={
              <div className="container mx-auto px-4 py-8 pb-36 dark:bg-gray-700">
                <PortfolioPage />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="container mx-auto px-4 py-8 pb-36 dark:bg-gray-700">
                <Contact />
              </div>
            }
          />
        </Routes>
      </main>
      <FooterComponent />
    </Router>
  );
};

export default App;
