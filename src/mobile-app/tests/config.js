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

const encripted_text= 'AU2FsdGVkX1/zxSzp4NG00TkOs5HSjmRy2TOTQiJ8rJ2M/uqVLI0iQOB+WtwmrdtRzt4Ae/Hz3rQJY2THJNLoxkmUL7RwV6iqyoCoH9vsrldIuv0GQoIxvbx+OAz2Q9LghH3vkWqaUiRucBp3rl5u3TzFk5dWVzz+Go6LiZ59p/46QQHk0wavH2UNMRax/XCiJTKGm/y6n5NKCes81TelJbJqOdVTM4w2/N1E1xBUtR8%3D';


export  function loadTestTextQRCodeValue(){

  return encripted_text;

}

export const delayDuration=500;

