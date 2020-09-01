import React from 'react';
import './App.css';
import { StartPages } from './components/pages/start';
import { GameProvider } from './components/context/GameContext';

function App() {
  return (
   <GameProvider>
      <StartPages />
   </GameProvider>
  );
}

export default App;