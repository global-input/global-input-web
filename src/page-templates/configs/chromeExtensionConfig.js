import {pagelinks} from "../../configs";
const chromeExtensionConfig={
  title:"Sign In Across Multiple Devices",
  menu:{
     bookmark:"chromeExtension"
   },
   content:["Global Input App can act as a Password Manager on your personal mobile device for signing into the web applications with Global Input App extensions.",
           "Credentials are stored encrypted in your device’s storage only, and decrypted only when it is needed and pushed to the connected application using end-to-end encryption.",
           [["You can install the ",{type:"a", content:"Global Input WordPress Plugin ", href:"https://github.com/global-input/wordpress-login"}, " into your WordPress instance to enable your website to support Global Input App"]],
           [["If the web application, or the website that you are visiting does not yet has the Global Input App extension, you can install the ",{type:"a",content:"Global Input Chrome Extension",href:"https://github.com/global-input/chrome-extension"}," to the Chrome browser on your computer. The extension acts as a go-between in receiving the data from your Global Input App and filling the form in the web pages."]],
           ["The web applications can be extended to support Global Input App using the ",{type:"link", content:"Global Input JavaScript library",link:pagelinks.jslibrary.url()}],
 ],
    install:{
               link:"https://github.com/global-input/chrome-extension",
            },
    startButton:"Install Chrome Extension"

}
export default chromeExtensionConfig;
