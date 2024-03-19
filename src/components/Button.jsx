const Button = ({ clickHandler, ButtonLabel }) => {
  return <button onClick={clickHandler}>{ButtonLabel}</button>;
};

export default Button;
