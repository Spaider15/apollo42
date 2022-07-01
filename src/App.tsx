import React from 'react';
import logo from './logo.png';
import './App.css';
import Dropdown from './Dropdown';

function App() {
  return (
    <div className="App">
        <div className='App-logo'></div>
        <div className='App-header flex justify-between'>
          <div className='App-title'>Market</div>
          <Dropdown value="1 Month"></Dropdown>
        </div>
    </div>
  );
}

export default App;
