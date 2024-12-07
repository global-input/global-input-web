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



// export const test_code= '/test/connect.txt';
// export const test_code= '/test/random.txt';

// export async function loadTestTextQRCodeValue()
// {
//           const codeContent= await fetch(test_code)
//           const codeString= await codeContent.text()          
//           return codeString;
// }

const encripted_text= 'P1U2FsdGVkX1+wkMsd/2y2mlik9GT1alsgSYIsg8+YGRz8iIIYkuL+LE+S0jMGdn4f';


export  function loadTestTextQRCodeValue(){

  return encripted_text;

}

export const delayDuration=500;

