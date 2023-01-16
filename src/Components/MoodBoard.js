import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const MoodBoard = () => {
  const [animate, setAnimate] = useState("");

  useEffect(() => {
    setAnimate("animate");
  }, []);

  return (
    <div className="app-content">
      <Navbar />

      <main>
        <div className="coming-soon">
          <h1 className={animate}>Coming Soon 😇 </h1>
          <div className="mood-coming">
            <img
              className={animate}
              src="/img/mood2.png"
              alt="mood tracking screen"
            />
            <img
              className={animate}
              src="/img/mood.png"
              alt="mood tracking screen"
            />
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default MoodBoard;
