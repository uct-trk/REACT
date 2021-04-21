import React, { useEffect, useState } from "react";
import "./styles.css";
import { TweenMax, Power1 } from "gsap";

const App = () => {
  const [big, setBig] = useState(false);

  useEffect(() => {
    TweenMax.to(".container", 0, { visibility: "visible" });
    TweenMax.from(".square", 0.8, { opacity: 0, y: 30, stagger: 0.25 });
  }, []);

  const handleClick = () => {
    setBig(!big);
    if (big) {
      TweenMax.to(".yellow", 0.5, {
        height: "20rem",
        width: "5rem",
        ease: Power1.easeOut
      });
    } else {
      TweenMax.to(".yellow", 0.5, {
        height: "10rem",
        width: "10rem",
        ease: Power1.easeOut
      });
    }
  };

  return (
    <div className="container">
      <div className="square"></div>
      <div className="square red"></div>
      <div className="square yellow" onClick={handleClick}></div>
      <div className="square green"></div>
      <div className="square blue"></div>
    </div>
  );
};

export default App;
