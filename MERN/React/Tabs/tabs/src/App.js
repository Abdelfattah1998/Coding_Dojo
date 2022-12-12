import './App.css';
import Tabs from './Components/Tabs';
import { useState } from 'react';
import MessageBox from './Components/messageBox';
function App() {
  const [message,setMessage]=useState('');
  return (
    <div className="App">
      <Tabs setMessage={setMessage}></Tabs>
      <MessageBox message={message}></MessageBox>
    </div>
  );
}

export default App;
