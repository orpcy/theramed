import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleChange } from "../../store/inputs/input-slice";
import { updateStep } from "../../store/progress/progress-slice";
import Progress from "../extras/Progress";
import Theme from "../extras/Theme";

const Stage1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(updateStep(1));
  }, [dispatch]);

  const handleChangeDispatch = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const { name } = useSelector((state) => state.input);

  const handleNext = () => {
    if (name !== "") {
      navigate("/stage2");
    } else {
      toast.error("Please input Username!");
    }
  };

  return (
    <div>
      <Theme />
      <div className="onboarding">
        <Progress />
        <img src="/img/blob.png" alt="blob" />
        <h3>
          Welcome to <span className="app-name">TheraMED</span>
        </h3>
        <p className="mt-3 mb-1">
          Hi, I’m Blob. Happy to have you here. <br /> What should I call you?
        </p>
        <div className="mb-3">
          <small className="text-secondary">Maximum of 8 Characters</small>
        </div>

        <div className="input-wrap">
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="Enter Username"
            onChange={(e) => handleChangeDispatch(e)}
            maxLength={8}
          />
        </div>
        <button onClick={handleNext} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default Stage1;