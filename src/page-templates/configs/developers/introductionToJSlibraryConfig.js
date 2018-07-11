import {images,pagelinks} from "../../../configs";
const introductionToJSlibraryConfig={
  title:"Global Input JavaScript Library",
  menu:{
     link:pagelinks.jslibrary.link,
     linkText:"JavaScript Library",
     bookmark:pagelinks.jslibrary.bookmark,
     url:pagelinks.jslibrary.url,
   },
   content:["The Global Input JavaScript library allows device and web applications to connect to the Global Input platform to have mobile input and mobile control functions without developing a separate mobile app. This is like bringing the mobile device environment into the existing device and web application runtime, and can be explained with the following diagram:",
            {type:"centerImage",src:images.developers.globalInputDeviceSolution},

    "This enables an application to implement mobile operation logic within the application itself by reusing the existing application processes that are usually implemented already.  Application can ask the Global Input App to display UI components and use callback function to receive mobile events and execute the process accordingly. For example if an application needs to have button labelled as “Start” on the mobile screen to allow the user to start a process within the application,  the following configuration can be passed to the Global Input JS library:",
    {type:"component", name:"sampleCode1"},
    "In the above sample code, The \”fields\” attribute is an array of mobile elements that are used by the application. The \”onInput\” function will be called when the user has pressed the \”Start\” button. The looks of the button can be customised, for example, if you would like to the border of the button displayed as \”green\” color:",
    {type:"component", name:"sampleCode2"},
    "As you can see from the above example code, you can set the title of the form being displayed on the mobile screen. If you would like to change the color of the title to \“green\”:",
    {type:"component", name:"sampleCode3"},
    "If you would like to display a text field named “Content”, and a button “Start” to receive mobile input events. You can use the following configuration:",
    {type:"component", name:"sampleCode4"},
    ["Please visit the ", {type:"a", content:"Global Input JS (global-input-message) Library on GitHub", href:pagelinks.githubs.jslibrary}," for information on how to install the JavaScript library and how to use it."]

    ],
}
export default introductionToJSlibraryConfig;
