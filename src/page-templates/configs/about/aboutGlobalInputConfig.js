import {images} from "../../../configs";
const aboutGlobalInputConfig={
  title:"About Global Input App",
  content:[
    "The Global Input App provides encrypted data storage and encrypted data transfer between devices by removing the need for relying on the securities in the storages, networks, servers and cloud infrastructures and it does not rely on security authorities to share encryption keys for the encrypted data transfer.",
    "With the capabilities of data transfer between devices using the end-to-end encryption, the Global Input App is also a universal mobile app for carrying out input/control operations on applications running on Smart TVs, Set top boxes, computers and other devices including IoT devices",

    "The encrypted data storage allows you to store and manage sensitive information such as credentials in your devices.  Your data is stored only in your device's storage, and encrypted with the encryption key that you also manage in your device. So this means you own your encryption as well as your data. The data in the app is encrypted with an encryption key, and the encryption key is encrypted with the app password.  So there is no subscription, no central account maintenance on the cloud, this means that there is no way of getting back the access to the app if you forgot the app password. ",
    {type:"line", content:[{type:"span",content:"The encrypted data transfer uses the end-to-end encryption to transfer data between your devices via a "},
                            {type:"a",content:"Web Socket Server. ", href:"https://github.com/global-input/global-input-node"},{type:"span", content:"You can download and run your own "},{type:"a",content:"Web Socket Server. ", href:"https://github.com/global-input/global-input-node"}, "to route the encrypted data between your devices.  If you have installed and run your own WebSocket server, you can set the URL and API key in your settings screen of the Global Input App. Each service applications and Chrome Extension can set their WebSocket server separately."]},
  "A new independent encryption key is generated on the fly for each session and is shared via the QR code to start the end-to-end encrypted data transfer. The WebSocket server will not be able to decrypt the data being transferred, it is only responsible for routing the encrypted data between devices.",
  {type:"span", content:"Global Input App is a free app, created by Dr. Dilshat Hewzulla ("},{type:"a",content:"dilshat@iterativesolution.co.uk",href:"dilshat@iterativesolution.co.uk"},{type:"span", content:") to resolve some common security issues faced daily in the business environments."},
]

};
export default aboutGlobalInputConfig;
