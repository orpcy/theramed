import React from "react";
import { useSelector } from "react-redux";

const Progress = () => {
  const { step } = useSelector((state) => state.progress);
  return (
    <div className="progress-container">
      <p>Step {step} of 5</p>
      <div className="progress-bar">
        {step > 0 && (
          <div className={`step`} style={{ width: step * 20 + "%" }}></div>
        )}
      </div>
    </div>
  );
};

export default Progress;
