import {pagelinks} from "../../configs";
const chromeExtensionConfig={
  title:"Global Input Extensions",
  menu:{
     bookmark:"chromeExtension"
   },
   content:["Global Input App allows you to use your mobile as a sign-in device with its encrypted storage and encrypted data transfer.",
    [["You can use the the ",{type:"link", content:"Global Input JavaScript library",link:pagelinks.jslibrary.url()}, " to extend your existing web application to support Global Input App."]],
    [["You can install the ",{type:"a", content:"Global Input WordPress Plugin ", href:"https://github.com/global-input/wordpress-login"}, " into your WordPress instance to enable your website to support Global Input App"]],
     [["If the web application, or the website that you are visiting does not yet has the Global Input App extension, you can install the ",{type:"a",content:"Global Input Chrome Extension",href:"https://github.com/global-input/chrome-extension"}," to the Chrome browser on your computer. The extension acts as a go-between in receiving the data from your Global Input App and filling the form in the web pages."]]
 ],
    install:{
               link:"https://github.com/global-input/chrome-extension",
            },
    startButton:"Install Chrome Extension"

}
export default chromeExtensionConfig;
