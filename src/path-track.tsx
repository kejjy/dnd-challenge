import React, { useState } from 'react';
import './App.scss';
import { getDefaultState, Path } from './models/path';
import { canToggleOff, canToggleOn, getSpriteClassPathOne, getSpriteClassPathTwo } from './utilities/step-helpers';
import { getDividerOnOffClass, getStepOnOffClass } from './utilities/style-helpers';

export interface PathTrackProps {
  pathName: string;
  points: number;
  incrementPoints: any;
  decrementPoints: any;
}

function PathTrack(props: PathTrackProps) {
  const [path, setPath] = useState<Path>(getDefaultState(props.pathName));

  function togglePath(e: any, stepName: string, toggleOn: boolean): void {
    e.preventDefault();

    if (isPointLimitHit(toggleOn)) {
      return;
    }

    if (!toggleOn && canToggleOff(path, stepName, props.points)) {
      setPath({
        ...path,
        [stepName]: false,
      });

      props.incrementPoints();
    } else if (toggleOn && canToggleOn(path, stepName, props.points)) {
      setPath({
        ...path,
        [stepName]: true,
      });
      props.decrementPoints();
    }
  }

  function isPointLimitHit(togglingOn: boolean) {
    return (props.points === 0 && togglingOn) || (props.points === 6 && !togglingOn);
  }

  function getSpriteClassName(stepName: string): string {
    const isPathOne = props.pathName === 'one';
    return isPathOne ? getSpriteClassPathOne(stepName) : getSpriteClassPathTwo(stepName);
  }

  return (
    <div className={`path-${props.pathName}`}>
      <div className="path-name">TALENT PATH {props.pathName}</div>
      <div
        className={`sprite-icon ${getSpriteClassName('stepOne')} ${getStepOnOffClass(path, 'stepOne')}`}
        onClick={(e) => togglePath(e, 'stepOne', true)}
        onContextMenu={(e) => togglePath(e, 'stepOne', false)}
      ></div>
      <div className={`divider ${getDividerOnOffClass(path, 'stepOne')}`}></div>
      <div
        className={`sprite-icon ${getSpriteClassName('stepTwo')} ${getStepOnOffClass(path, 'stepTwo')}`}
        onClick={(e) => togglePath(e, 'stepTwo', true)}
        onContextMenu={(e) => togglePath(e, 'stepTwo', false)}
      ></div>
      <div className={`divider ${getDividerOnOffClass(path, 'stepTwo')}`}></div>
      <div
        className={`sprite-icon ${getSpriteClassName('stepThree')} ${getStepOnOffClass(path, 'stepThree')}`}
        onClick={(e) => togglePath(e, 'stepThree', true)}
        onContextMenu={(e) => togglePath(e, 'stepThree', false)}
      ></div>
      <div className={`divider ${getDividerOnOffClass(path, 'stepThree')}`}></div>
      <div
        className={`sprite-icon ${getSpriteClassName('stepFour')} ${getStepOnOffClass(path, 'stepFour')}`}
        onClick={(e) => togglePath(e, 'stepFour', true)}
        onContextMenu={(e) => togglePath(e, 'stepFour', false)}
      ></div>
    </div>
  );
}

export default PathTrack;
