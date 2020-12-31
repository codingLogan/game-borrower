function ActionButton({ id, clickHandler }) {
  return (
    <button
      id={id}
      className={`console_btn console_btn--circle`}
      onClick={clickHandler}
    ></button>
  );
}

export default ActionButton;
