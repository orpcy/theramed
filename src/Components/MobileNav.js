import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <div className="left">
        <Link to="/home">Home</Link>
        <Link to="/meditation">Meditation</Link>
      </div>
      <div className="middle">
        <img src="/img/mobile-blob.png" alt="" />
      </div>
      <div className="right">
        <Link to="/mood">Mood Board</Link>
        <Link to="/planner">Planner</Link>
      </div>
    </div>
  );
};

export default MobileNav;
