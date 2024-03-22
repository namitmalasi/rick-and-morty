const Button = ({ clickHandler, ButtonLabel, classes, disabled }) => {
  return (
    <button disabled={disabled} className={`${classes}`} onClick={clickHandler}>
      {ButtonLabel}
    </button>
  );
};

export default Button;
