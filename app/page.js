"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import { Backdrop, CircularProgress } from "@mui/material";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading screen */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" size={60} />
      </Backdrop>

      {!loading && (
        <>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Header isDarkMode={isDarkMode} />
          <About isDarkMode={isDarkMode} />
          <Services isDarkMode={isDarkMode} />
          <Work isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
        </>
      )}
    </>
  );
}
