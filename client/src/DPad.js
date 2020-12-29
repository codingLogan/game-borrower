function DPad({id, clickHandler}) {
    return (
        <div id={id}>
            <div className="console_direction console_upDown">
              <button>▲</button>
              <button className="text_direction--flip">▲</button>
            </div>
            <div className="console_direction console_leftRight">
              <button className="text_direction--flip">▲</button>
              <button>▲</button>
            </div>
        </div>
    )
}

export default DPad