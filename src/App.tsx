import React, { useState } from 'react';
import './App.scss';
import { Path } from './models/path';
import { getNextStep, getPrevStep } from './utilities/step-helpers';
import { getDividerOnOffClass, getStepOnOffClass } from './utilities/style-helpers';

const MAX_POINTS = 6;

function getDefaultState(): Path {
  return {
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
  };
}

function App() {
  const [pathOne, setPathOne] = useState<Path>(getDefaultState());
  const [pathTwo, setPathTwo] = useState<Path>(getDefaultState());
  const [points, setPoints] = useState<number>(MAX_POINTS);

  function togglePathOne(e: any, stepName: string, toggleOn: boolean): void {
    e.preventDefault();

    if (isPointLimitHit(toggleOn)) {
      return;
    }

    if (!toggleOn && canToggleOff(pathOne, stepName)) {
      if (canToggleOff(pathOne, stepName)) {
        setPathOne({
          ...pathOne,
          [stepName]: false,
        });

        incrementPoints();
      }
    } else if (toggleOn && canToggleOn(pathOne, stepName)) {
      setPathOne({
        ...pathOne,
        [stepName]: true,
      });
      decrementPoints();
    }
  }

  function togglePathTwo(e: any, stepName: string, toggleOn: boolean): void {
    e.preventDefault();

    if (isPointLimitHit(toggleOn)) {
      return;
    }

    if (!toggleOn && canToggleOff(pathTwo, stepName)) {
      if (canToggleOff(pathTwo, stepName)) {
        setPathTwo({
          ...pathTwo,
          [stepName]: false,
        });

        incrementPoints();
      }
    } else if (toggleOn && canToggleOn(pathTwo, stepName)) {
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

  function isPointLimitHit(togglingOn: boolean) {
    return (points === 0 && togglingOn) || (points === 6 && !togglingOn);
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
            onClick={(e) => togglePathOne(e, 'stepOne', true)}
            onContextMenu={(e) => togglePathOne(e, 'stepOne', false)}
          ></div>
          <div className={`divider ${getDividerOnOffClass(pathOne, 'stepOne')}`}></div>
          <div
            className={`sprite-icon sprite-icon-silverware ${getStepOnOffClass(pathOne, 'stepTwo')}`}
            onClick={(e) => togglePathOne(e, 'stepTwo', true)}
            onContextMenu={(e) => togglePathOne(e, 'stepTwo', false)}
          ></div>
          <div className={`divider ${getDividerOnOffClass(pathOne, 'stepTwo')}`}></div>
          <div
            className={`sprite-icon sprite-icon-cake ${getStepOnOffClass(pathOne, 'stepThree')}`}
            onClick={(e) => togglePathOne(e, 'stepThree', true)}
            onContextMenu={(e) => togglePathOne(e, 'stepThree', false)}
          ></div>
          <div className={`divider ${getDividerOnOffClass(pathOne, 'stepThree')}`}></div>
          <div
            className={`sprite-icon sprite-icon-crown ${getStepOnOffClass(pathOne, 'stepFour')}`}
            onClick={(e) => togglePathOne(e, 'stepFour', true)}
            onContextMenu={(e) => togglePathOne(e, 'stepFour', false)}
          ></div>
        </div>
        <div className="path-two">
          <div className="path-name">TALENT PATH 2</div>
          <div
            className={`sprite-icon sprite-icon-boat ${getStepOnOffClass(pathTwo, 'stepOne')}`}
            onClick={(e) => togglePathTwo(e, 'stepOne', true)}
            onContextMenu={(e) => togglePathTwo(e, 'stepOne', false)}
          ></div>
          <div className={`divider ${getDividerOnOffClass(pathTwo, 'stepOne')}`}></div>
          <div
            className={`sprite-icon sprite-icon-snorkel ${getStepOnOffClass(pathTwo, 'stepTwo')}`}
            onClick={(e) => togglePathTwo(e, 'stepTwo', true)}
            onContextMenu={(e) => togglePathTwo(e, 'stepTwo', false)}
          ></div>
          <div className={`divider ${getDividerOnOffClass(pathTwo, 'stepTwo')}`}></div>
          <div
            className={`sprite-icon sprite-icon-lightning ${getStepOnOffClass(pathTwo, 'stepThree')}`}
            onClick={(e) => togglePathTwo(e, 'stepThree', true)}
            onContextMenu={(e) => togglePathTwo(e, 'stepThree', false)}
          ></div>
          <div className={`divider ${getDividerOnOffClass(pathTwo, 'stepThree')}`}></div>
          <div
            className={`sprite-icon sprite-icon-skull ${getStepOnOffClass(pathTwo, 'stepFour')}`}
            onClick={(e) => togglePathTwo(e, 'stepFour', true)}
            onContextMenu={(e) => togglePathTwo(e, 'stepFour', false)}
          ></div>
        </div>
      </div>
      <div className="points-container">
        <div className="points">
          {points} / {MAX_POINTS}
        </div>
        <div>Points Remaining</div>
      </div>
    </div>
  );
}

export default App;
