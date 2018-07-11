import {pagelinks} from "../../configs";
const chromeExtensionConfig={
  title:"Chrome Extension",
  menu:{          
     bookmark:"chromeExtension"
   },
   content:["Global Input App allows you to use your mobile as a sign-in device with its encrypted storage and encrypted data transfer.",
     {type:"line", content:[{content:"If the web application, or the website that you are visiting does not yet has the Global Input App extension, you can install the "},{type:"a",content:"Global Input Chrome Extension",href:"https://github.com/global-input/chrome-extension"}," to the Chrome browser on your computer. The extension acts as a go-between in receiving the data from your Global Input App and filling the form in the web pages."]},
   "You can scan the QR code, which is displayed in the extension popup window, with your Global Input App to connect to the extension. Then, you will be able to send the data stored in the app to the extension, which will forward the received data to the form in the page."
 ],
    install:{
               link:"https://github.com/global-input/chrome-extension",
            },
    startButton:"Install Chrome Extension"

}
export default chromeExtensionConfig;
