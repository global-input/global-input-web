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



export const developmentScanDelayDuration=500;