import React from "react";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Meditation = () => {
  const quick = [6, 4, 1, 2];
  const stress = [5, 3, 7, 8];
  const sleep = [2, 8, 4, 5];

  return (
    <div className="app-content">
      <Navbar />

      <main>
        <div className="mt-5">
          <h5 className="section-title">Quick & Easy</h5>
          <div className="section med-page">
            {quick.map((m, i) => {
              return (
                <div className="meditation-img" key={i}>
                  <img src={`/img/medi${m}.png`} alt={`meditation${m}`} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5">
          <h5 className="section-title">Stress Relief</h5>
          <div className="section med-page">
            {stress.map((m, i) => {
              return (
                <div className="meditation-img" key={i}>
                  <img src={`/img/medi${m}.png`} alt={`meditation${m}`} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5">
          <h5 className="section-title">Better Sleep</h5>
          <div className="section med-page">
            {sleep.map((m, i) => {
              return (
                <div className="meditation-img" key={i}>
                  <img src={`/img/medi${m}.png`} alt={`meditation${m}`} />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Meditation;
