import {images} from "../../../configs";
const aboutGlobalInputConfig={
  title:"About Global Input App",
  content:[
    "The Global Input App is a universal mobile app for carrying out input operations on applications running on Smart TVs, Set top boxes, computers and other devices including your IoT products.",
    "With the mobile app, you will be able to operate on various applications running on various devices just by scanning the QR code displayed, and the app wil decide what to do based on the data contained inside the QR code.",
    "The Global Input App allows the service applications to transfer some of its operations or processes to the mobile app, so that the users can operate or control via their mobile.",
    "This brings the mobile app environment into your service application running on other devices such as Computers, Smart TV etc.",
    [
              {type:"a",href:"https://itunes.apple.com/us/app/global-input-app/id1269541616?mt=8&ign-mpt=uo%3D4",content:{type:"image", src:images.appstore}},
              {type:"a", href:"https://play.google.com/store/apps/details?id=uk.co.globalinput&hl=en_GB",content:{type:"image", src:images.playstore}}
            ]
  ]

};
export default aboutGlobalInputConfig;
