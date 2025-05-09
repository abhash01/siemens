import { useEffect, useState, useRef } from "react";
import SubNav from "./components/Header/SubNav";
import TopNav from "./components/Header/TopNav";
import ScrollNav from "./components/Header/ScrollNav";
import HeroSection from "./pages/Hero/HeroSection";
import { Box, Container } from "@mui/material";

function App() {
  const [isMobileView, setIsMobileView] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.matchMedia("(max-width: 991px)").matches);
    };

    checkScreenSize();

    const resizeListener = () => checkScreenSize();
    window.addEventListener("resize", resizeListener);

    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const getScrolledHeight = () => {
    if (isMobileView) {
      return "78px";
    }

    // Smooth transition for scrolled height
    const baseHeight = 150;
    const scrolledHeight = 88;
    const progress = Math.min(window.scrollY / 50, 1); // Calculate progress based on scroll position
    const interpolatedHeight =
      baseHeight - (baseHeight - scrolledHeight) * progress;

    return `${interpolatedHeight}px`;
  };

  const getNavComponent = () => {
    if (isMobileView) {
      return <TopNav />;
    }
    return <TopNav />;
  };

  return (
    <Box ref={headerRef}>
      {getNavComponent()}

      <SubNav scrolledHeight={getScrolledHeight()} />
      <HeroSection />
    </Box>
  );
}

export default App;
