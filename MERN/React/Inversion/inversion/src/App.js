import './App.css';
import PersonCard from './Components/PersonCard';
function App() {
  return (
    <div className="App">
<PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
    </div>
  );
}

export default App;
