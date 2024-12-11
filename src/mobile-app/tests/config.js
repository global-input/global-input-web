//if the hostname is localhost, then the environment is development
let environment=process.env.NODE_ENV;
if(window.location.hostname==='localhost'){
  environment='development';
}
else{
  environment='production';
}

export const isDevelopment=environment==='development';

export const  developmentPassword=isDevelopment?'test1':'';

const encripted_text= 'test';


export  function loadTestTextQRCodeValue(){

  return encripted_text;

}

export const delayDuration=500;

