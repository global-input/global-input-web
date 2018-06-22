const chromeExtensionConfig={
  title:"Chrome Extension",
  menu:{
     link:"/global-input-app/formd-data-transfer",
     linkText:"Form Data Transfer",
     bookmark:"chromeExtension"
   },
   content:[{type:"span", content:"Global Input App allows you to use your mobile as a Sign Device with its encrypted storage and encrypted data transfer.  If the web application, or the website that you are visiting does not yet support the Global Input App, you can install the "},{type:"a",content:"Global Input Chrome Extension",href:"https://github.com/global-input/chrome-extension"},{type:"span", content:"to the Chrome browser on your computer. The extension acts as a go-between in receiving the data from the Global Input App and filling the form displayed in the web page with the data received from the app."}],
    install:{
               link:"https://github.com/global-input/chrome-extension",
            },
    startButton:"Start"

}
export default chromeExtensionConfig;
