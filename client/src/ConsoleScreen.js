import logo from './logo.svg';
import './App.css';
// import './ConsoleScreen.js'

function ConsoleScreen() {
  return (
    <div className="console">
      <div className="console_screen">
          <div className="console_screen-display"></div>
      </div>
      <div className="console_buttons">
        <div className="console_directions">+</div>
        <div className="AB_buttons">
            <div className="console_accept">A</div>
            <div className="console_back">B</div>
        </div>
      </div>
      <div className="startSelect_buttons"></div>
      <div className="console_start">Start</div>
      <div className="console_select">Select</div>
    </div>
  );
}

export default ConsoleScreen;
