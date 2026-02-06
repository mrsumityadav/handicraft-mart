import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // smooth nahi, bilkul HTML jaisa
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
