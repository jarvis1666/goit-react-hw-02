import css from "../Options/Options.module.css";

export const Options = ({ name, onUpdate }) => {
  return (
    <button onClick={onUpdate} className={css.btnOptions}>
      {name}
    </button>
  );
};
