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

const encrypted_text= 'AU2FsdGVkX1/Cd2ympA+rS0Wc0+AhjVzzzuw5+RnDCm6+0CsXTVE1NLoVydRPaczsWhaBFEUBdlUwT/tvcxK4IXml2QS39Fp4GQ9UEo0cJn9ldnQZ267bKutsxunJTADb89uaBXUC7LDrq8NcmHY0kQHri+DZuJpKQj8syV8Mefg5FnNh6z/36xsLJvOXavUJooFKX8G/YPX92ce8wxeY1iwr6vbXR6AXu1mLaLdV+Ls%3D';


export  function loadTestTextQRCodeValue(){

  return encrypted_text;

}

export const delayDuration=500;

