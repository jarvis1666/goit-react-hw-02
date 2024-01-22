import { Notification } from "../Notification/Notification";
import css from "../Feedback/Feedback.module.css";

export const Feedback = ({
  clicks: { good, neutral, bad },
  total,
  positiveValue,
}) => {
  if (total !== 0) {
    return (
      <div>
        <p className={css.text}>Good: {good}</p>
        <p className={css.text}>Neutral: {neutral}</p>
        <p className={css.text}>Bad: {bad}</p>
        <p className={css.text}>Total: {total}</p>
        <p className={css.text}>Positive: {positiveValue}%</p>
      </div>
    );
  } else {
    return <Notification />;
  }
};
