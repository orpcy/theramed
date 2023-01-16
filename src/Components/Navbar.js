import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleTheme } from "../store/theme/theme-slice";

const Navbar = () => {
  const dispatch = useDispatch();

  const { themeSelected } = useSelector((state) => state.theme);

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    dispatch(toggleTheme(getTheme));
  }, [dispatch]);

  const name = localStorage.getItem("name");

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("name");
  };

  return (
    <nav className="desktop-nav">
      <div className="inner">
        <img src="/img/theramed.png" alt="App Logo" className="logo" />
        <div className="right-nav">
          <Link to="/home">Home</Link>
          <Link to="/meditation">Meditation</Link>
          <Link to="/mood">Mood Board</Link>
          <Link to="/planner">Planner</Link>

          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <div className="profile">
                <img src="/img/profile.png" alt="profile image" />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <p className="user-name">Hi, {name}</p>
              <p className="d-flex justify-content-between">
                <span>{themeSelected === "light" ? "Dark" : "Light"} Mode</span>
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
              </p>
              <p
                onClick={handleLogout}
                className="d-flex justify-content-between logout"
              >
                <span>Logout</span>
                <span>
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </span>
              </p>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
