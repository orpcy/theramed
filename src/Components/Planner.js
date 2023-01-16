import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Planner = () => {
  const [animate, setAnimate] = useState("");

  useEffect(() => {
    setAnimate("animate");
  }, []);

  return (
    <div className="app-content">
      <Navbar />

      <main className="planner-page">
        <div className={`coming-soon planner ${animate}`}>
          <h1 className={animate}>Coming Soon 😇 </h1>
          <div className="planner-coming">
            <img src="/img/planner.png" alt="planner screen" />
            <img src="/img/planner2.png" alt="planner screen" />
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Planner;
