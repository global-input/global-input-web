const integratedDevelopment=true;

const globalInputAppLaunchBaseURL = "https://globalinput.co.uk/global-input-app/mobile-app?launchType=qr";

const testAppLaunchHost='tnode2.globalinput.co.uk';

const testGlobalInputAppLaunchBaseURL= `https://${testAppLaunchHost}/global-input-app/mobile-app?launchType=qr`;

const localhost='localhost';  


export const getGlobalInputAppLaunchBaseURL =()=>{    
     if(!integratedDevelopment){
            return globalInputAppLaunchBaseURL;
     }    
    if (window.location.hostname === 'tnode2.globalinput.co.uk' || window.location.hostname === localhost) {
      return testGlobalInputAppLaunchBaseURL;
    }
    else{
        return globalInputAppLaunchBaseURL;
    }

}



//if the hostname is localhost, then the environment is development
let environment=process.env.NODE_ENV;
if(window.location.hostname==='localhost'){
  environment='development';
}
else{
  environment='production';
}

export const isDevelopment=environment==='development';



const encrypted_text= 'AU2FsdGVkX19jfdcFa+qGEJGbIPCdBDTKLB0+Y6kLVY6Z7QsZgef8KE4M4GF0Om4IlltBEdXHaZ2aFFHBZZjBB9m3kY+a3/5lNVAvjHp8JThhC7sr3ekRbtb+A6MHW8Xyj4Yefa4UkFZWe1Blb41pJ5Pywx9qMb9LTc4/ZdvlmlUeHOXK48tbh1Qo40KxLkAr3PToNALnr7SM96M1ZUcsmaZy0bzHjS9QTwjoY+pKxsQ%3D';


export  function loadTestTextQRCodeValue(){

  return encrypted_text;

}

export const developmentScanDelayDuration=500;