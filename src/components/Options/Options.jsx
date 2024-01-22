import css from "../Options/Options.module.css";

export const Options = ({
  updateBadFun,
  updateNeutralFun,
  updateGoodFun,
  updateResetFunction,
  totalFeedbackValue,
}) => {
  return (
    <div className={css.optionsContainet}>
      <button onClick={updateGoodFun} className={css.btnOptions}>
        Good{" "}
      </button>
      <button onClick={updateNeutralFun} className={css.btnOptions}>
        Neutral{" "}
      </button>
      <button onClick={updateBadFun} className={css.btnOptions}>
        Bad{" "}
      </button>
      <button
        onClick={updateResetFunction}
        className={totalFeedbackValue === 0 ? css.defolt : css.btnOptions}
      >
        Reset{" "}
      </button>
    </div>
  );
};
