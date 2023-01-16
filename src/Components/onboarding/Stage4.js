import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateStep } from "../../store/progress/progress-slice";
import Progress from "../extras/Progress";
import Theme from "../extras/Theme";

const Stage4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(updateStep(4));
  }, [dispatch]);

  const [workDuration, setWorkDuration] = useState([
    { id: 1, text: "2 hours or less", selected: false },
    { id: 2, text: "2-4 hours", selected: false },
    { id: 3, text: "4-6 hours", selected: false },
    { id: 4, text: "6-8 hours", selected: false },
    { id: 5, text: "More than 8 hours", selected: false },
  ]);

  const handleSelected = (id) => {
    const newWorkDuration = workDuration.map((w) => {
      if (w.id === id) {
        if (!w.selected) {
          w.selected = true;
        } else {
          w.selected = false;
        }
      } else {
        w.selected = false;
      }
      return w;
    });

    setWorkDuration(newWorkDuration);
  };

  const handleNext = () => {
    const checkSelection = workDuration.filter((a) => a.selected);

    if (checkSelection.length) {
      navigate("/stage5");
    } else {
      toast.error("Please select an average work duration!");
    }
  };

  return (
    <div>
      <Theme />
      <div className="onboarding">
        <Progress />
        <img src="/img/blob.png" alt="blob" />
        <p className="mt-3 mb-1">
          How many hours on average <br /> do you work everyday?
        </p>
        <div className="mb-3">
          <small className="text-secondary">
            Your response is confidential and won't be made public.
          </small>
        </div>

        <div className="work-duration">
          {workDuration.map((w, i) => {
            const { text, selected, id } = w;
            return (
              <div className="work" key={id} onClick={() => handleSelected(id)}>
                <span>{text}</span>
                {selected && (
                  <span className="check">
                    <i class="fa-solid fa-check"></i>
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

export default Stage4;
