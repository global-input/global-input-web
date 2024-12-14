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

const encripted_text= 'AU2FsdGVkX181etSNM68gOpQW+u+Y8RGPidCsWhk/C8cSFKPu8vxFRn9L6tv6CtXBYMDBpnkGHa0tD939sbi1HnVXnTnNIjwDZGmY9JJs6opfKx7EaOOVs4Kg3qWEN2guOLk8xVTUwkcLKsvzfw1eGMgJSyLPo//te3WxiVVtI5pLwd48DAv83uCHhGPVeLS6G2zE2Uy6m4eWzS+iyuCADgvjzlDizho2R48m2FoWfyI%3D';


export  function loadTestTextQRCodeValue(){

  return encripted_text;

}

export const delayDuration=500;

