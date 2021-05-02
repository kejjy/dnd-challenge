import { Path } from '../models/path';

export const STEPS = {
  ONE: 'stepOne',
  TWO: 'stepTwo',
  THREE: 'stepThree',
  FOUR: 'stepFour',
};

export function getPrevStep(stepName: string): string {
  switch (stepName) {
    case STEPS.ONE:
      return '';
    case STEPS.TWO:
      return STEPS.ONE;
    case STEPS.THREE:
      return STEPS.TWO;
    case STEPS.FOUR:
      return STEPS.THREE;
    default:
      return '';
  }
}

export function getNextStep(stepName: string): string {
  switch (stepName) {
    case STEPS.ONE:
      return STEPS.TWO;
    case STEPS.TWO:
      return STEPS.THREE;
    case STEPS.THREE:
      return STEPS.FOUR;
    case STEPS.FOUR:
      return '';
    default:
      return '';
  }
}

export function canToggleOn(path: Path, stepName: string, points: number): boolean {
  const prevStepName = getPrevStep(stepName);
  return points <= 6 && (prevStepName !== '' ? path[prevStepName] : true);
}

export function canToggleOff(path: Path, stepName: string, points: number): boolean {
  const nextStepName = getNextStep(stepName);
  return points >= 0 && !(nextStepName !== '' ? path[nextStepName] : false);
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
