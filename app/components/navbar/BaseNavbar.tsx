"use client";
import React, { useState, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const BaseNavbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Use matchMedia to set initial state and add listener
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    // Set initial state
    handleResize();

    // Add listener with matchMedia
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return <header className="font-axiforma">{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</header>;
};

export default BaseNavbar;
