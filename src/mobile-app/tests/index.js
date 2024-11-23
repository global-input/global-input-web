//if the hostname is localhost, then the environment is development
let environment=process.env.NODE_ENV;
if(window.location.hostname==='localhost'){
  environment='development';
}
else{
  environment='production';
}

export const isDevelopment=environment==='development';

export const Scanner = isDevelopment
  ? require('./__mocks__/@yudiel/react-qr-scanner').Scanner
  : require('@yudiel/react-qr-scanner').Scanner;


  export const  developmentPassword='camilla';
