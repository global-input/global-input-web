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

const encripted_text= 'AU2FsdGVkX18jWfl1QQtOZNkWnV1qaumG85NqgWmekwYylUxwHfIU84QdOBpos6Dj0CXTGMAf0Rt1muwB9XhpWfNXokGOxeU16SOY2ftyaoyL7BJ5DL1hiANb9yKDXgAORUEj6IHx7imvm44ZSL17AezRaJN70nQvXPyCNkz8GtEeVhYDNuvF55v2inQB+zf6Msn4UH0hq+sKemvuQRksHajqm9ASm5jyQQFFN3hEA5E%3D';


export  function loadTestTextQRCodeValue(){

  return encripted_text;

}

export const delayDuration=500;

