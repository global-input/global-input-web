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

const encripted_text= 'AU2FsdGVkX1/XdRyA0LzHkPWm5zHweynjFu29q8vS219b7knZMPds7CapgaFGykfYqJmpEKvH/VqmQdgRggRi2BkK5r/bO2SHySksoUqON5tPfaZq0MLWTUsGF6demCE4YREhV8ykpm+rHoel0wABILQdMjdqJxZW9VuhpSsFZd2kM66+8hikYQuyIzjyctyiGrZr2AnmNFSeCu9IXT6P9VV5Xd6/5rsrczJaZtxdwPE%3D';


export  function loadTestTextQRCodeValue(){

  return encripted_text;

}

export const delayDuration=500;

