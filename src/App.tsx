import React, { useState } from 'react';
import './App.scss';
import { Path } from './models/path';

function App() {
  const [pathOne, setPathOne] = useState<Path>({
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
  });
  const [pathTwo, setPathTwo] = useState<Path>({
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
  });

  function getStepOnOffClass(path: Path, propertyName: string): string {
    console.log(propertyName, path[propertyName]);
    if (!!path[propertyName]) {
      return 'on';
    }
    return 'off';
  }

  function togglePathOne(propertyName: string): void {
    const currentValue = pathOne[propertyName];
    setPathOne({
      ...pathOne,
      [propertyName]: !currentValue,
    });
  }

  function togglePathTwo(propertyName: string): void {
    const currentValue = pathTwo[propertyName];
    setPathTwo({
      ...pathTwo,
      [propertyName]: !currentValue,
    });
  }

  return (
    <div className="App">
      <header className="header">
        <span>TitanStar Legends - Rune Master Loadout Talent Calculator 9000</span>
      </header>
      <div className="path-container">
        <div className="path-one">
          <div className="path-name">TALENT PATH 1</div>
          <div
            className={`sprite-icon sprite-icon-boxes ${getStepOnOffClass(pathOne, 'stepOne')}`}
            onClick={() => togglePathOne('stepOne')}
          ></div>
          <div className="divider"></div>
          <div
            className={`sprite-icon sprite-icon-silverware ${getStepOnOffClass(pathOne, 'stepTwo')}`}
            onClick={() => togglePathOne('stepTwo')}
          ></div>
          <div className="divider"></div>
          <div
            className={`sprite-icon sprite-icon-cake ${getStepOnOffClass(pathOne, 'stepThree')}`}
            onClick={() => togglePathOne('stepThree')}
          ></div>
          <div className="divider"></div>
          <div
            className={`sprite-icon sprite-icon-crown ${getStepOnOffClass(pathOne, 'stepFour')}`}
            onClick={() => togglePathOne('stepFour')}
          ></div>
        </div>
        <div className="path-two">
          <div className="path-name">TALENT PATH 2</div>
          <div
            className={`sprite-icon sprite-icon-boat ${getStepOnOffClass(pathTwo, 'stepOne')}`}
            onClick={() => togglePathTwo('stepOne')}
          ></div>
          <div className="divider"></div>
          <div
            className={`sprite-icon sprite-icon-snorkel ${getStepOnOffClass(pathTwo, 'stepTwo')}`}
            onClick={() => togglePathTwo('stepTwo')}
          ></div>
          <div className="divider"></div>
          <div
            className={`sprite-icon sprite-icon-lightning ${getStepOnOffClass(pathTwo, 'stepThree')}`}
            onClick={() => togglePathTwo('stepThree')}
          ></div>
          <div className="divider"></div>
          <div
            className={`sprite-icon sprite-icon-skull ${getStepOnOffClass(pathTwo, 'stepFour')}`}
            onClick={() => togglePathTwo('stepFour')}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
