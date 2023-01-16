import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateStep } from "../../store/progress/progress-slice";
import ForgotPassword from "./ForgotPassword";
import Progress from "../extras/Progress";
import Theme from "../extras/Theme";
import { toast } from "react-toastify";
import { handleChange } from "../../store/inputs/input-slice";

const Stage5 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(updateStep(5));
  }, [dispatch]);

  const handleChangeDispatch = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const { name, email, password } = useSelector((state) => state.input);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleNext = () => {
    if (email !== "" && password !== "") {
      navigate("/home");
    } else {
      toast.error("Email and password are required");
    }
  };

  return (
    <div>
      <Theme />
      <div className="onboarding">
        <Progress />
        <img src="/img/blob.png" alt="blob" />
        <p className="mt-3 mb-1">
          Welcome, <span className="name">{name}</span>
        </p>
        <div className="mb-3">
          <small className="text-secondary info">
            We are really happy that you have decided to start your mindfulness
            journey with us.
          </small>
        </div>

        <div className="input-wrap">
          <input
            type="email"
            name="email"
            class="form-control mb-2"
            placeholder="Work email"
            onChange={(e) => handleChangeDispatch(e)}
          />
          <input
            type="password"
            name="password"
            class="form-control"
            placeholder="Password"
            onChange={(e) => handleChangeDispatch(e)}
          />
        </div>
        <div className="d-flex justify-content-end mt-2">
          <small role="button" onClick={handleShow}>
            Forgot password?
          </small>
        </div>

        <button onClick={handleNext} className="btn btn-primary">
          Continue
        </button>

        <ForgotPassword show={showModal} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default Stage5;
