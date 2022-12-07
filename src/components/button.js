const Button = (props) => {
  let { name, handleClick, customClass } = props;
  return (
    <>
      <button className={customClass} onClick={handleClick}>
        {name}
      </button>
    </>
  );
};

export default Button;
