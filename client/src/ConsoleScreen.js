import './ConsoleScreen.css'
import ScreenContent from './ScreenContent'

// Mock data first
const borrowers = [
  {name: "Bowser"},
  {name: "Mario", ui_test: "active_item"},
  {name: "Luigi"},
  {name: "Samus"},
]

function ConsoleScreen() {
  return (
    <div className="console">
      <div className="console_screen">
        <div className="console_screen-display">
          <ScreenContent />
        </div>
      </div>
      <div className="console_buttons">
        <div className="console_directions">
            <div className="console_direction console_upDown">
              <button>▲</button>
              <button className="text_direction--flip">▲</button>
            </div>
            <div className="console_direction console_leftRight">
              <button className="text_direction--flip">▲</button>
              <button>▲</button>
            </div>
        </div>
        <div className="AB_buttons">
            <button className="console_btn--circle console_accept"></button>
            <button className="console_btn--circle console_back"></button>
        </div>
      </div>
      <div className="startSelect_buttons">
        <button className="console_start"></button>
        <button className="console_select"></button>
      </div>
    </div>
  );
}

export default ConsoleScreen;
