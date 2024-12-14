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

const encripted_text= 'AU2FsdGVkX19GMpMnKnolafrf4Q/OWC3pAmIN28l4ATrBEk18erUSX1uNR4Mozxk9AQ9Ny7IVx/rDjz8lRhhr+dXohrNGzQ0U6TSQXV4KCUwVrAQBvFwZjVDOushrJNutqKa9Hwrit2YCugAifdBGDYSm/HMRpAk6sc5v8uK9Duk8xCRJV30/oI3yviTmg15TGGwOMuiafedGLR82glXKc64bGdWg3DqtRt1d04tVxC8%3D';


export  function loadTestTextQRCodeValue(){

  return encripted_text;

}

export const delayDuration=500;

