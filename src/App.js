import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Stage1 from "./Components/onboarding/Stage1";
import Stage2 from "./Components/onboarding/Stage2";
import Stage3 from "./Components/onboarding/Stage3";
import Stage4 from "./Components/onboarding/Stage4";
import Stage5 from "./Components/onboarding/Stage5";

import Home from "./Components/Home";
import Meditation from "./Components/Meditation";
import MoodBoard from "./Components/MoodBoard";
import Planner from "./Components/Planner";

import { ToastContainer } from "react-toastify";
import { handleChange } from "./store/inputs/input-slice";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const { themeSelected } = useSelector((state) => state.theme);

  const bgImage = {
    backgroundImage: `${
      themeSelected === "light" ? "url(/img/bg-white.png)" : "url(/img/bg.jpg)"
    }`,
  };

  return (
    <div className={`app ${themeSelected}`} style={bgImage}>
      <Routes>
        <Route element={<Stage1 />} path="/" />
        <Route element={<Stage2 />} path="/stage2" />
        <Route element={<Stage3 />} path="/stage3" />
        <Route element={<Stage4 />} path="/stage4" />
        <Route element={<Stage5 />} path="/stage5" />

        <Route element={<Home />} path="/home" />
        <Route element={<Meditation />} path="/meditation" />
        <Route element={<MoodBoard />} path="/mood" />
        <Route element={<Planner />} path="/planner" />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
