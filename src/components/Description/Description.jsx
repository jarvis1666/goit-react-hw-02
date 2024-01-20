import css from "../Description/Description.module.css";

export const Description = () => {
  return (
    <div className={css.containerDescription}>
      <h1 className={css.name}>Sip Happens Café</h1>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
