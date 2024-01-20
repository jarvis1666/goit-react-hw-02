import { useState, useEffect } from "react";

import css from "../App/App.module.css";
import { Description } from "../Description/Description";
import { Options } from "../Options/Options";
import { Feedback } from "../Feedback/Feedback";

function App() {
  const [clicks, setClicks] = useState(() => {
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
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateGood = () => {
    setClicks({
      ...clicks,
      good: clicks.good + 1,
    });
  };
  const updateNeutral = () => {
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1,
    });
  };
  const updateBad = () => {
    setClicks({
      ...clicks,
      bad: clicks.bad + 1,
    });
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positive = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );
  const resetFunction = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  if (totalFeedback === 0) {
    return (
      <div className={css.container}>
        <Description></Description>
        <div className={css.optionsContainet}>
          <Options
            name="Good"
            onUpdate={updateGood}
            total={totalFeedback}
          ></Options>
          <Options
            name="Neutral"
            onUpdate={updateNeutral}
            total={totalFeedback}
          ></Options>
          <Options
            name="Bad"
            onUpdate={updateBad}
            total={totalFeedback}
          ></Options>
        </div>
        <Feedback clicks={clicks} total={totalFeedback}></Feedback>
      </div>
    );
  } else {
    return (
      <div className={css.container}>
        <Description></Description>
        <div className={css.optionsContainet}>
          <Options
            name="Good"
            onUpdate={updateGood}
            total={totalFeedback}
          ></Options>
          <Options
            name="Neutral"
            onUpdate={updateNeutral}
            total={totalFeedback}
          ></Options>
          <Options
            name="Bad"
            onUpdate={updateBad}
            total={totalFeedback}
          ></Options>
          <Options name="Reset" onUpdate={resetFunction}></Options>
        </div>
        <Feedback
          clicks={clicks}
          total={totalFeedback}
          proc={positive}
        ></Feedback>
      </div>
    );
  }
}

export default App;
