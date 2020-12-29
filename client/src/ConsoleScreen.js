import './ConsoleScreen.css'
import ScreenContent from './ScreenContent'
import ActionButton from './ActionButton'
import MenuButton from './MenuButton'
import DPad from './DPad'

// Mock data first
const borrowers = [
  {name: "Bowser"},
  {name: "Mario", ui_test: "active_item"},
  {name: "Luigi"},
  {name: "Samus"},
]

function ConsoleScreen() {
  return (
    <div id="console">
      <div className="console_screen">
        <div className="console_screen-display">
          <ScreenContent />
        </div>
      </div>
      <div className="console_buttons">
        <DPad id="console_directions" />
        <div className="AB_buttons">
            <ActionButton id="console_accept" type="circle" />
            <ActionButton id="console_back" type="circle" />
        </div>
      </div>
      <div id="menu_buttons">
        <MenuButton id="console_start" />
        <MenuButton id="console_select" />
      </div>
    </div>
  );
}

export default ConsoleScreen;
