import { useState, useEffect } from "react";

import css from "../App/App.module.css";
import { Description } from "../Description/Description";
import { Options } from "../Options/Options";
import { Feedback } from "../Feedback/Feedback";

function App() {
  const [options, setOptions] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (JSON.parse(savedClicks) !== null) {
      return JSON.parse(savedClicks);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(options));
  }, [options]);

  const updateGood = () => {
    setOptions({
      ...options,
      good: options.good + 1,
    });
  };
  const updateNeutral = () => {
    setOptions({
      ...options,
      neutral: options.neutral + 1,
    });
  };
  const updateBad = () => {
    setOptions({
      ...options,
      bad: options.bad + 1,
    });
  };
  const totalFeedback = options.good + options.neutral + options.bad;
  const positive = Math.round(
    ((options.good + options.neutral) / totalFeedback) * 100
  );
  const resetFunction = () => {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description></Description>
      <Options
        updateBadFun={updateBad}
        updateNeutralFun={updateNeutral}
        updateGoodFun={updateGood}
        updateResetFunction={resetFunction}
        totalFeedbackValue={totalFeedback}
      ></Options>
      <Feedback
        clicks={options}
        total={totalFeedback}
        positiveValue={positive}
      ></Feedback>
    </div>
  );
}

export default App;
