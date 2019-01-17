import {pagelinks} from "../../configs";
const chromeExtensionConfig={
  title:"Authentication Device Solution",
  menu:{
     bookmark:"chromeExtension"
   },
   content:[" Authentication on shared devices in public view. No need to hide screen, keyboard even mobile screen when signing in on a shared device.",

           ["Please watch ",{type:"a", href:pagelinks.video.authenticationDemo,content:" this demo video"}, " and ",{type:"a", href:pagelinks.video.tutorialVideo,content:" this tutorial video"}," to learn how to use the Global Input App on the websites and the web applications via the extension on the ", {type:"a",content:"Chrome Store ",href:"https://chrome.google.com/webstore/detail/global-input-app/hcklienddlealndjnakkagefaelhnjkp"}, "or on ",{type:"a",content:"the Github repository",href:"https://github.com/global-input/chrome-extension"}, "."],
           ["A WordPress website can be enabled by installing ",{type:"a", content:"the WordPress Plugin ", href:"https://github.com/global-input/wordpress-login"},""],

           ["If you are a web application developer, you can also extend your existing web applications by including the ",{type:"link", content:"JavaScript library",link:pagelinks.jslibrary.url()}],
           "The mechanism allows users to carry out operations such as subscription, sign in, and changing passwords in public view without making any effort to type/hide/save/remember passwords. The following security rules can be enforced without sacrificing the user convenience:",
           {
             type:"ul",
             content:["Set a password to a completely random one.",
             "Use a different password for a different application.",
             "Change the password frequently."
            ]

           }


    ],







    install:{
               link:"https://github.com/global-input/chrome-extension",
            },
    startButton:"Install Chrome Extension"

}
export default chromeExtensionConfig;
