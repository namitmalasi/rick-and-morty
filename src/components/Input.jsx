const Input = ({ type, placeholder, changeHandler }) => {
  return (
    <input
      className="p-2 border-black border-2 rounded-md w-full"
      type={type}
      placeholder={placeholder}
      onChange={changeHandler}
    />
  );
};

export default Input;
