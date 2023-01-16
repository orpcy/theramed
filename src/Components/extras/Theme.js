import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../../store/theme/theme-slice";

const Theme = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { themeSelected } = useSelector((state) => state.theme);
  const { step } = useSelector((state) => state.progress);

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    dispatch(toggleTheme(getTheme));
  }, [dispatch]);

  return (
    <div className="theme">
      <span className="go-back" onClick={() => navigate(-1)}>
        {step > 1 && <i class="fa-solid fa-arrow-left"></i>}
      </span>

      {themeSelected === "light" ? (
        <span
          className={themeSelected}
          onClick={() => dispatch(toggleTheme("dark"))}
        >
          <i className="fa-solid fa-moon"></i>
        </span>
      ) : (
        <span
          className={themeSelected}
          onClick={() => dispatch(toggleTheme("light"))}
        >
          <i className="fa-solid fa-sun"></i>
        </span>
      )}
    </div>
  );
};

export default Theme;
