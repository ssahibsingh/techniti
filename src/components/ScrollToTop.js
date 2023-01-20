import { useEffect } from "react";
 
function ScrollToTop({ children }) {
 
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
 
  return children;
}
 
export default ScrollToTop;