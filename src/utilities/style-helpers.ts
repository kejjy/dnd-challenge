import { Path } from '../models/path';
import { getNextStep, STEPS } from './step-helpers';

const ON = 'on';
const OFF = 'off';

export function getStepOnOffClass(path: Path, propertyName: string): string {
  if (path[propertyName]) {
    return ON;
  }
  return OFF;
}

export function getDividerOnOffClass(path: Path, propertyName: string): string {
  if (path[propertyName] && path[getNextStep(propertyName)]) {
    return ON;
  }
  return OFF;
}

export function getSpriteClassPathOne(stepName: string): string {
  switch (stepName) {
    case STEPS.ONE:
      return 'sprite-icon-boxes';
    case STEPS.TWO:
      return 'sprite-icon-silverware';
    case STEPS.THREE:
      return 'sprite-icon-cake';
    case STEPS.FOUR:
      return 'sprite-icon-crown';
    default:
      return '';
  }
}

export function getSpriteClassPathTwo(stepName: string): string {
  switch (stepName) {
    case STEPS.ONE:
      return 'sprite-icon-boat';
    case STEPS.TWO:
      return 'sprite-icon-snorkel';
    case STEPS.THREE:
      return 'sprite-icon-lightning';
    case STEPS.FOUR:
      return 'sprite-icon-skull';
    default:
      return '';
  }
}
