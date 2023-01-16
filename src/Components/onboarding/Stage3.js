import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateStep } from "../../store/progress/progress-slice";
import Progress from "../extras/Progress";
import Theme from "../extras/Theme";

const Stage3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(updateStep(3));
  }, [dispatch]);

  const [actions, setActions] = useState([
    {
      id: 1,
      text: "Short Track",
      img: "https://shorturl.at/dxAR4",
      selected: false,
    },
    {
      id: 2,
      text: "Medium Track",
      img: "https://shorturl.at/ahNPY",
      selected: false,
    },
    {
      id: 3,
      text: "Long Track",
      img: "https://shorturl.at/hIJ01",
      selected: false,
    },
  ]);

  const handleSelected = (id) => {
    const newActions = actions.map((a) => {
      if (a.id === id) {
        if (!a.selected) {
          a.selected = true;
        } else {
          a.selected = false;
        }
      } else {
        a.selected = false;
      }
      return a;
    });

    setActions(newActions);
  };

  const handleNext = () => {
    const checkSelection = actions.filter((a) => a.selected);

    if (checkSelection.length) {
      navigate("/stage4");
    } else {
      toast.error("Please select an activity length!");
    }
  };

  return (
    <div>
      <Theme />
      <div className="onboarding">
        <Progress />
        <img src="/img/blob.png" alt="blob" />
        <p className="mt-3 mb-1">What activity length best suits you?</p>
        <div className="mb-3">
          <small className="text-secondary">
            You will have access to all activities and tracks in the app.
          </small>
        </div>

        <div>
          {actions.map((a, i) => {
            const { text, img, id, selected } = a;
            return (
              <div
                className="action-wrapper"
                key={i}
                onClick={() => handleSelected(id)}
              >
                <div
                  className={`action ${selected && "selected"}`}
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <p>{text}</p>
                {selected && (
                  <span>
                    <i class="fa-regular fa-circle-check"></i>
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <button onClick={handleNext} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default Stage3;
