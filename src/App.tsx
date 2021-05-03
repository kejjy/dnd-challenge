import React, { useState } from 'react';
import './App.scss';
import PathTrack from './path-track';

const MAX_POINTS = 6;

function App() {
  const [points, setPoints] = useState<number>(MAX_POINTS);

  function incrementPoints() {
    setPoints(points + 1);
  }

  function decrementPoints() {
    setPoints(points - 1);
  }

  return (
    <div className="App">
      <header className="header">
        <span>TitanStar Legends - Rune Master Loadout Talent Calculator 9000</span>
      </header>
      <div className="path-container">
        <PathTrack pathName="one" points={points} incrementPoints={incrementPoints} decrementPoints={decrementPoints} />
        <PathTrack pathName="two" points={points} incrementPoints={incrementPoints} decrementPoints={decrementPoints} />
      </div>
      <div className={`points-container ${points === 0 ? 'out-of-points' : ''}`}>
        <div className="points">
          {points} / {MAX_POINTS}
        </div>
        <div>Points Remaining</div>
      </div>
    </div>
  );
}

export default App;
