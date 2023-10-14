import React, { useState } from "react";

const myStyle = {
  position: "Fixed",
  bottom: "4rem",
  right: "1.5rem",
  fontSize: "2rem",
  zIndex: "999",
  cursor: "pointer",
};
const ScrolTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <span
        style={myStyle}
        onClick={() => window.scrollTo(0, 0)}
        className="arrowUp"
      >
        🔝
      </span>
    </div>
  );
};

export default ScrolTop;
