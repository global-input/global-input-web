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

const encrypted_text= 'https://tnode2.globalinput.co.uk/global-input-app/mobile-app?launchType=qr&session=FzkGpOx4fcQFHyBcj&code=m4zr9zx9&url=https%3A%2F%2Ftnode1.globalinput.co.uk';


export  function loadTestTextQRCodeValue(){

  return encrypted_text;

}

export const delayDuration=500;

