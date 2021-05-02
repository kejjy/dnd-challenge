import React, { useState } from 'react';
import './App.scss';
import { Path } from './models/path';
import { getNextStep, getPrevStep } from './utilities/step-helpers';

const MAX_POINTS = 6;

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

  const [points, setPoints] = useState<number>(MAX_POINTS);

  function getStepOnOffClass(path: Path, propertyName: string): string {
    if (path[propertyName]) {
      return 'on';
    }
    return 'off';
  }

  function getDividerOnOffClass(path: Path, propertyName: string): string {
    if (path[propertyName] && path[getNextStep(propertyName)]) {
      return 'on';
    }
    return 'off';
  }

  function togglePathOne(stepName: string): void {
    const togglingOff = pathOne[stepName];
    const togglingOn = !togglingOff;

    if (isPointLimitHit(togglingOn, togglingOff)) {
      return;
    }

    if (togglingOff && canToggleOff(pathTwo, stepName)) {
      if (canToggleOff(pathOne, stepName)) {
        setPathOne({
          ...pathOne,
          [stepName]: false,
        });

        incrementPoints();
      }
    } else if (togglingOn && canToggleOn(pathOne, stepName)) {
      setPathOne({
        ...pathOne,
        [stepName]: true,
      });
      decrementPoints();
    }
  }

  function togglePathTwo(stepName: string): void {
    const togglingOff = pathTwo[stepName];
    const togglingOn = !togglingOff;

    if (isPointLimitHit(togglingOn, togglingOff)) {
      return;
    }

    if (togglingOff && canToggleOff(pathTwo, stepName)) {
      setPathTwo({
        ...pathTwo,
        [stepName]: false,
      });

      incrementPoints();
    } else if (togglingOn && canToggleOn(pathTwo, stepName)) {
      setPathTwo({
        ...pathTwo,
        [stepName]: true,
      });
      decrementPoints();
    }
  }

  function incrementPoints() {
    setPoints(points + 1);
  }

  function decrementPoints() {
    setPoints(points - 1);
  }

  function isPointLimitHit(togglingOn: boolean, togglingOff: boolean) {
    return (points === 0 && togglingOn) || (points === 6 && togglingOff);
  }

  function canToggleOn(path: Path, stepName: string): boolean {
    const prevStepName = getPrevStep(stepName);
    return points <= 6 && (prevStepName !== '' ? path[prevStepName] : true);
  }

  function canToggleOff(path: Path, stepName: string): boolean {
    const nextStepName = getNextStep(stepName);
    return points >= 0 && !(nextStepName !== '' ? path[nextStepName] : false);
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
          <div className={`divider ${getDividerOnOffClass(pathOne, 'stepOne')}`}></div>
          <div
            className={`sprite-icon sprite-icon-silverware ${getStepOnOffClass(pathOne, 'stepTwo')}`}
            onClick={() => togglePathOne('stepTwo')}
          ></div>
          <div className={`divider ${getDividerOnOffClass(pathOne, 'stepTwo')}`}></div>
          <div
            className={`sprite-icon sprite-icon-cake ${getStepOnOffClass(pathOne, 'stepThree')}`}
            onClick={() => togglePathOne('stepThree')}
          ></div>
          <div className={`divider ${getDividerOnOffClass(pathOne, 'stepThree')}`}></div>
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
          <div className={`divider ${getDividerOnOffClass(pathTwo, 'stepOne')}`}></div>
          <div
            className={`sprite-icon sprite-icon-snorkel ${getStepOnOffClass(pathTwo, 'stepTwo')}`}
            onClick={() => togglePathTwo('stepTwo')}
          ></div>
          <div className={`divider ${getDividerOnOffClass(pathTwo, 'stepTwo')}`}></div>
          <div
            className={`sprite-icon sprite-icon-lightning ${getStepOnOffClass(pathTwo, 'stepThree')}`}
            onClick={() => togglePathTwo('stepThree')}
          ></div>
          <div className={`divider ${getDividerOnOffClass(pathTwo, 'stepThree')}`}></div>
          <div
            className={`sprite-icon sprite-icon-skull ${getStepOnOffClass(pathTwo, 'stepFour')}`}
            onClick={() => togglePathTwo('stepFour')}
          ></div>
        </div>
      </div>
      <div className="points-container">
        <div>
          {points} / {MAX_POINTS}
        </div>
        <div>Points Remaining</div>
      </div>
    </div>
  );
}

export default App;
