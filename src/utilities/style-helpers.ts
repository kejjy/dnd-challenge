import { Path } from '../models/path';
import { getNextStep } from './step-helpers';

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
