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

const encrypted_text= 'AU2FsdGVkX1+pZULFfbeXXWBIthKXebYQUqXHe0WhxQn83Qhen6t3xcyU8ukA5nT6zxZIlgj9oPSjX0g2GEmFVIzgA4rSTEoQfBJLohX+uyRhJ1spC6qOPxAKfD5cenGONBK7dw01QmlbCASggp2NlfNE0HCTUqH9P1kvuIKUKO9Oia2ami6jBeo5Xvyq5UzsgIo50QS1n/ri5tWcCDmZq0Tp8UITrgpXOzbWajaH20c%3D';


export  function loadTestTextQRCodeValue(){

  return encrypted_text;

}

export const delayDuration=500;

