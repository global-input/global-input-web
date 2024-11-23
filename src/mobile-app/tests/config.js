//if the hostname is localhost, then the environment is development
let environment=process.env.NODE_ENV;
if(window.location.hostname==='localhost'){
  environment='development';
}
else{
  environment='production';
}

export const isDevelopment=environment==='development';

export const  developmentPassword='camilla';


export const test_code= '/test/import_key.txt';
// export const test_code= '/test/connect.txt';
// export const test_code= '/test/random.txt';

export const delayDuration=500;

