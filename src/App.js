import React from 'react';
import Display from './components/Display';
import Pad from './components/Pad';
import Power from './components/Power';
import Bank from './components/Bank';
import AudioContextProvider from './contexts/AudioContext.js';
import BankContextProvider from "./contexts/BankContext.js";
import PowerContextProvider from './contexts/PowerContext';
import DisplayContextProvider from './contexts/DisplayContext';


function App() {
  return (
    
    <div id ="drum-machine" className="App">
      <DisplayContextProvider>
      <PowerContextProvider>
      <BankContextProvider>
      <AudioContextProvider>
        <Display/>
        <Pad/>
        <Power/>
        <Bank/>
      </AudioContextProvider>
      </BankContextProvider>
      </PowerContextProvider>
      </DisplayContextProvider>
    </div>
  );
}

export default App;
