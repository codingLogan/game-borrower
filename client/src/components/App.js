import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import ConsoleScreen from './ConsoleScreen'

function App() {
  return (
    <Router>
      <div className="App">
        <ConsoleScreen />
      </div>
    </Router>
  );
}

export default App;
