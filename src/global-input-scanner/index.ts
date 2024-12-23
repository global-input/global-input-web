import * as globalInputConfig from 'global-input-config';

import * as yudiel from '@yudiel/react-qr-scanner';

import * as tests from './react-qr-scanner';


let Scanner: React.FC<yudiel.IScannerProps> = yudiel.Scanner;


if(globalInputConfig.isDevelopment){

    Scanner=tests.Scanner
}

export {Scanner};

