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

const encripted_text= 'P3C7h1U2FsdGVkX1/qB0K5289DPVK6GRqFVrOPO59/8nnr1oIuOaaxMoW3Z0ggMnAyPG6LxQ/lpaQNLxT3Vg9nvG9XInMct/du6iZapbyl00rc5zEd0MHNJ7eSKZZKlY9vp7aH';


export  function loadTestTextQRCodeValue(){

  return encripted_text;

}

export const delayDuration=500;

