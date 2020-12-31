function DPad({ id, downHandler, upHandler }) {
  return (
    <div id={id}>
      <div className="console_direction">
        <button className="console_btn--dpad" onClick={upHandler}>
          ▲
        </button>
        <button
          className="text_direction--flip console_btn--dpad"
          onClick={downHandler}
        >
          ▲
        </button>
      </div>
      <div className="console_direction console_direction--horizontal">
        <button className="text_direction--flip console_btn--dpad">▲</button>
        <button className="console_btn--dpad">▲</button>
      </div>
    </div>
  );
}

export default DPad;
