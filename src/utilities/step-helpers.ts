export function getPrevStep(stepName: string): string {
  switch (stepName) {
    case 'stepOne':
      return '';
    case 'stepTwo':
      return 'stepOne';
    case 'stepThree':
      return 'stepTwo';
    case 'stepFour':
      return 'stepThree';
    default:
      return '';
  }
}

export function getNextStep(stepName: string): string {
  switch (stepName) {
    case 'stepOne':
      return 'stepTwo';
    case 'stepTwo':
      return 'stepThree';
    case 'stepThree':
      return 'stepFour';
    case 'stepFour':
      return '';
    default:
      return '';
  }
}
