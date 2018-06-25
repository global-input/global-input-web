const chromeExtensionConfig={
  title:"Chrome Extension",
  menu:{
     link:"/global-input-app/formd-data-transfer",
     linkText:"Form Data Transfer",
     bookmark:"chromeExtension"
   },
   content:[{type:"line", content:[{content:"Global Input App allows you to use your mobile as a Sign Device with its encrypted storage and encrypted data transfer.  If the web application, or the website that you are visiting does not yet support the Global Input App, you can install the "},{type:"a",content:"Global Input Chrome Extension",href:"https://github.com/global-input/chrome-extension"},{type:"span", content:" to the Chrome browser on your computer. The extension acts as a go-between in receiving the data from your Global Input App and filling the form in the web pages."}]},
   "You can scan the QR code, which is displayed in the extension popup window, with your Global Input App to connect to the extension. Then, you will be able to send the data stored in the app to the extension, which will forward the received data to the form in the page."
 ],
    install:{
               link:"https://github.com/global-input/chrome-extension",
            },
    startButton:"Install Chrome Extension"

}
export default chromeExtensionConfig;
