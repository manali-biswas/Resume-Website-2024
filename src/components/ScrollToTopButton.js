import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);
  }, []);

  return (
    <div className="scrollToTopParent">
      {showButton && (
        <div className="scrollToTop">
          <a href="#"><i class="bi bi-arrow-up-circle-fill"></i></a>
        </div>
      )}
    </div>
  );
}

export default ScrollToTopButton;
