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



const encrypted_text= 'AU2FsdGVkX198/EPb6GNXI4P41TxDEUlKQ14VTPl7AHiokHTKbH4KSNzpzJu7oPlyn8L9AWJSJyQkVJKd6xWex8NMrmvfMq2K5C70Hos9cpFv61eBjrIpVxdFgjx86V62947Db5WUR2Pc698HeSi3Rolh/sP8scMpqPQUjkQa+97XxzRJBFhv50bpdPwF+WMH/BYS0cce/p9xy25ND3I1wCSfszWemCMpVuuh6tiiFt4%3D';


export  function loadTestTextQRCodeValue(){

  return encrypted_text;

}

export const developmentScanDelayDuration=500;