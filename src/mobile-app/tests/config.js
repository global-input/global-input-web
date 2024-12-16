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

const encrypted_text= 'AU2FsdGVkX19Q5Fs94oBZF6oLtwaeTV2z42Q0UpqNKU8So0oc4zOVJAQSce99ZH2jfRkNmNz7M5M0oiqdzaKNEb/Jx7SxiX51AzTTQOTfwVt0YtmwZ9q3oQxiRa/jQcTPtOnurOd/pALzHyBPWkp0X2IxLcGbq2rE806JmzNkOquqrZfnyqCHacB5WxulVkSNAi3kCvQhcGVYYxzJSaotgG8RiKxntD2e8RXuZ04LFAQ%3D';


export  function loadTestTextQRCodeValue(){

  return encrypted_text;

}

export const delayDuration=500;

