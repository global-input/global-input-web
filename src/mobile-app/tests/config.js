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

const encripted_text= 'AU2FsdGVkX1+VStt+OznKaDO+PZ2F2oGsPE5qY/KHL+ZQn2B9Py0I+ZZYQ/QMEph+C+A+UJtKWHYrMY+dXUWaYEZw90PHZLmtZ1WHM4/wvj4pTXKT05YCbeVu2WCSueqR2+YY4UplHcJxiuUesKivcy/btCChdHupHyorTP05CYvwdQ+S/RmcjcE0lprsL5aNt5nwlnPQViYt7ly4lCG4Vye2JCafUCLQgFH2AQ1aJgo%3D';


export  function loadTestTextQRCodeValue(){

  return encripted_text;

}

export const delayDuration=500;

