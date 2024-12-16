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

const encrypted_text= 'AU2FsdGVkX1+a2OuDunDiANwDIqrmn/2CQ5lygXj2QXpss7UIxx0Qy4fkmIx6jQsB2Bnj1KbnXJloIfpJf9SyBDvikl3h4ZNlFxFDSmB/Xj+jWzcDSvNVmYWBBl4X1Z/NqbpLTJ5gq0lrZNB++sPWNeALSl7tCROaRP2IuocJrtfvIT0cJh82QmBAEOB+EuxnxZFkvD3Ze3gM6oltMCYI66gm/6RIca3109B0bVQvJ5M%3D';


export  function loadTestTextQRCodeValue(){

  return encrypted_text;

}

export const delayDuration=500;

