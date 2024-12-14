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

const encripted_text= 'AU2FsdGVkX19wWzhreHuuMDuvXA8wOR2uAVLXaDrFolbsbW1cFi9qULtM99mB5YT7Hy6fm0FAVEST/8q6gO5A4E4ioCIhULAAX+icXAVbPonKYcMjUOkCZUvZsmuZRYpvArGzvB9aUc7TborkzoKgLrAaiarFXQ5fKrHYTVj5qzG7iXNtOGkkuf6G13WKAAwBojRUUR9VlhMCoXY1OSdpsAaksnt4cBJ4SjyBDR7I7u8%3D';


export  function loadTestTextQRCodeValue(){

  return encripted_text;

}

export const delayDuration=500;

