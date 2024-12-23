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

export const  developmentPassword=isDevelopment?'test1':'';

const encrypted_text= 'https://tnode2.globalinput.co.uk/global-input-app/mobile-app?launchType=qr&session=hkB5FOjX0x56CwMYp&code=m50s3bi2&url=https%3A%2F%2Ftnode1.globalinput.co.uk';


export  function loadTestTextQRCodeValue(){

  return encrypted_text;

}

export const developmentScanDelayDuration=500;