import React, { useState } from 'react';
import './App.scss';
import { getDefaultState, Path } from './models/path';
import {
  canToggleOff,
  canToggleOn,
  getSpriteClassPathOne,
  getSpriteClassPathTwo,
  STEPS,
} from './utilities/step-helpers';
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

  function getStepTile(stepName: string): JSX.Element {
    return (
      <div
        className={`sprite-icon ${getSpriteClassName(stepName)} ${getStepOnOffClass(path, stepName)}`}
        onClick={(e) => togglePath(e, stepName, true)}
        onContextMenu={(e) => togglePath(e, stepName, false)}
      ></div>
    );
  }

  function getDivider(stepName: string): JSX.Element {
    return <div className={`divider ${getDividerOnOffClass(path, stepName)}`}></div>;
  }

  return (
    <div className={`path-${props.pathName}`}>
      <div className="path-name">TALENT PATH {props.pathName}</div>
      {getStepTile(STEPS.ONE)}
      {getDivider(STEPS.ONE)}
      {getStepTile(STEPS.TWO)}
      {getDivider(STEPS.TWO)}
      {getStepTile(STEPS.THREE)}
      {getDivider(STEPS.THREE)}
      {getStepTile(STEPS.FOUR)}
    </div>
  );
}

export default PathTrack;
