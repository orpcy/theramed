import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateStep } from "../../store/progress/progress-slice";
import Progress from "../extras/Progress";
import Theme from "../extras/Theme";

const Stage2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(updateStep(2));
  }, [dispatch]);

  const [actions, setActions] = useState([
    {
      id: 1,
      text: "Reduce Stress",
      img: "https://shorturl.at/cdowZ",
      selected: false,
    },
    {
      id: 2,
      text: "Reduce Anxiety",
      img: "https://shorturl.at/ahNPY",
      selected: false,
    },
    {
      id: 3,
      text: "Be Peaceful",
      img: "https://shorturl.at/hIJ01",
      selected: false,
    },
    {
      id: 4,
      text: "Personal Growth",
      img: "https://shorturl.at/wHY39",
      selected: false,
    },
    {
      id: 5,
      text: "Better Sleep",
      img: "https://shorturl.at/oAMVX",
      selected: false,
    },
    {
      id: 6,
      text: "Take Journals",
      img: "https://shorturl.at/ABLOV",
      selected: false,
    },
  ]);

  const { name } = useSelector((state) => state.input);

  const handleNext = () => {
    const checkSelection = actions.filter((a) => a.selected);
    if (checkSelection.length >= 2) {
      navigate("/stage3");
    } else {
      toast.error("Please select two or more options!");
    }
  };

  const handleSelected = (id) => {
    const newActions = actions.map((a) => {
      if (a.id === id) {
        a.selected = !a.selected;
      }
      return a;
    });

    setActions(newActions);
  };

  return (
    <div>
      <Theme />
      <div className="onboarding">
        <Progress />
        <img src="/img/blob.png" alt="blob" />
        <p className="mt-3 mb-1">
          Hi <span className="name">{name}</span>, what brings you to us?
        </p>
        <div className="mb-3">
          <small className="text-secondary">Select 2 or more</small>
        </div>

        <div>
          {actions.map((a, i) => {
            const { text, img, id, selected } = a;
            return (
              <div
                className="action-wrapper"
                key={id}
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

export default Stage2;
