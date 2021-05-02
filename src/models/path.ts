export interface Path {
  name: string;
  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;
  stepFour: boolean;
}

export function getDefaultState(name: string): Path {
  return {
    name,
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
  };
}
