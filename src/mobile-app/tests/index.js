//if the hostname is localhost, then the environment is development
import {isDevelopment, developmentPassword} from './config';
export {isDevelopment, developmentPassword};


export const Scanner = isDevelopment
  ? require('./__mocks__/@yudiel/react-qr-scanner').Scanner
  : require('@yudiel/react-qr-scanner').Scanner;



