import './App.css';
import Form from './Components/Form';
import { useState } from 'react';
import Task from './Components/Task';
function App() {
    const [tasks,setTasks]=useState([]);

    const tasker=(input)=>{
      setTasks(input);
    }
  return (
    <div className="App">
      <Form setTask={tasker} tasks={tasks}/>
      <Task setTask={tasker} tasks={tasks}/>
    </div>
  );
}

export default App;
