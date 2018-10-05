import {pagelinks} from "../../configs";
const chromeExtensionConfig={
  title:"Authentication on Shared Devices",
  menu:{
     bookmark:"chromeExtension"
   },
   content:["Sign in safely to web applications on a shared computer or somebody else’s laptop or a big screen device such as a Smart TV, and when everybody is watching the big screen, your mobile screen and your typing on the computer keyboard.",
           "Push the credentials stored in your mobile app to the applications running on other devices to carry out the sign in operation.",
           [["To enable your WordPress powered website with Global Input App, install ",{type:"a", content:"the WordPress Plugin ", href:"https://github.com/global-input/wordpress-login"},"so that users can use their mobile to sign in on your site."]],
           [["To use the Global Input App on the websites and the web applications that are not yet enabled, click on the ", {type:"a",content:"one-click-install",href:"https://chrome.google.com/webstore/detail/global-input-app/hcklienddlealndjnakkagefaelhnjkp"}, " to install the Chrome Extension or install it from ",{type:"a",content:"the Github repository",href:"https://github.com/global-input/chrome-extension"}, "."]],

           ["You are a web application developer, extend your web applications by including the ",{type:"link", content:"JavaScript library",link:pagelinks.jslibrary.url()}],
 ],
    install:{
               link:"https://github.com/global-input/chrome-extension",
            },
    startButton:"Install Chrome Extension"

}
export default chromeExtensionConfig;
