function DPad({id, clickHandler}) {
    return (
        <div id={id}>
            <div className="console_direction">
              <button className="console_btn--dpad">▲</button>
              <button className="text_direction--flip console_btn--dpad">▲</button>
            </div>
            <div className="console_direction console_direction--horizontal">
              <button className="text_direction--flip console_btn--dpad">▲</button>
              <button className="console_btn--dpad">▲</button>
            </div>
        </div>
    )
}

export default DPad