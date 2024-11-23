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

const test_code1= 'P3C7h1U2FsdGVkX19HV/lE8tqQp6d+W2kLYlES14f+vg9kfeVvaztakdgHqUM64G6VCuGPT0Bi/jAWfpu5KSF1lHPbRggMgRUnp4rH/dMLZ2Ff2Zvvd6WxOcf0gXgNV7e5Ygro';


export  function loadTestTextQRCodeValue(){

  return test_code1;

}

export const delayDuration=500;

