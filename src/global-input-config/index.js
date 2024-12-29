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



const encrypted_text= 'AU2FsdGVkX1+CuqYU/EfTOnlaB7mdtZrQOWlXYFsYUjsvzNEGYLHDVTAVvkxIk9I9/UZPTpYfswea9F5gRoMPmi1H3mkgwe9nt0mtAb37N+2TytKWIisQOEvHk/1OXBUfu6sg/cbdSvEaWiaNlEiuS2Sjufan7oi2JRyj7QjE9Qw3YJT3N0umthaW1sX6pKBh18YaW5pqeEB8IADYYcEaiGsetjfuEwrJOHg7vx3C6AI%3D';


export  function loadTestTextQRCodeValue(){

  return encrypted_text;

}

export const developmentScanDelayDuration=500;