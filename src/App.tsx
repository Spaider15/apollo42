import React from 'react';
import './App.css';
import Dropdown from './Components/Dropdown';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
        <div className='App-logo'></div>
        <div className='App-content'>
          <div className='App-header flex justify-between'>
            <div className='App-title'>Market</div>
            <Dropdown value="1 Month"></Dropdown>
          </div>
          <Cards />
        </div>
    </div>
  );
}

export default App;
