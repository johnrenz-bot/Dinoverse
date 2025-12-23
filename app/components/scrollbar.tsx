// components/Header.js
"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // if scrolled more than 10px, add shadow or effect
      if (currentScroll > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300
        bg-transparent ${scrolled ? "shadow-md backdrop-blur-sm" : ""}`}
    >
      <h1 className="text-white font-bold">My Transparent Header</h1>
    </header>
  );
}
