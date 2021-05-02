import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <span>TitanStar Legends - Rune Master Loadout Talent Calculator 9000</span>
      </header>
      <div className="path-container">
        <div className="path-one">
          <div className="path-name">TALENT PATH 1</div>
          <div className="sprite-icon sprite-icon-boxes"></div>
          <div className="divider"></div>
          <div className="sprite-icon sprite-icon-silverware"></div>
          <div className="divider"></div>
          <div className="sprite-icon sprite-icon-cake"></div>
          <div className="divider"></div>
          <div className="sprite-icon sprite-icon-crown"></div>
        </div>
        <div className="path-two">
          <div className="path-name">TALENT PATH 2</div>
          <div className="sprite-icon sprite-icon-boat"></div>
          <div className="divider"></div>
          <div className="sprite-icon sprite-icon-snorkel"></div>
          <div className="divider"></div>
          <div className="sprite-icon sprite-icon-lightning"></div>
          <div className="divider"></div>
          <div className="sprite-icon sprite-icon-skull"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
