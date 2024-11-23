//if the hostname is localhost, then the environment is development
let environment=process.env.NODE_ENV;
if(window.location.hostname==='localhost'){
  environment='development';
}
else{
  environment='production';
}

export const isDevelopment=environment==='development';

export const  developmentPassword=isDevelopment?'camilla':'';


const test_code= '/test/import_key.txt';
// export const test_code= '/test/connect.txt';
// export const test_code= '/test/random.txt';

// export async function loadTestTextQRCodeValue()
// {
//           const codeContent= await fetch(test_code)
//           const codeString= await codeContent.text()          
//           return codeString;
// }

const encripted_text= 'P1U2FsdGVkX1+jdguP1vo1drT0t06DAFzTh/SnZ7xKitkuDJFVwbA/aEDjwQEME33O';


export  function loadTestTextQRCodeValue(){

  return encripted_text;

}

export const delayDuration=500;

