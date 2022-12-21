import './App.css';
import {Router} from '@reach/router'
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"></Home>
        <></>
      </Router>
    </div>
  );
}

export default App;
