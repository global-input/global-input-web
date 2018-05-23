const chromeExtensionConfig={
  title:"Chrome Extension",
  menu:{
     link:"/global-input-app/formd-data-transfer",
     linkText:"Form Data Transfer",
     bookmark:"chromeExtension"      
   },
   content:["The Global Input App running on your mobile can work together with the Global Input Chrome extension on your computer to allow you safely and conveniently sign in to the websites and web applications via your mobile.",
            "When you are vising a websites, you can click on the extension to activate the Global Input App extension and display a QR Code on your computer screen. When you scan the QR code with the Global Input App, you can transfer the data to the extension via the end-to-end encryption.",
            "The Chrome extension may directly fills the form wih the content it has received if it can locate a recognisable form, otherwise it will display a form in its window so that you do copy and paste operations.",
            "Click the install button below to install the Chrome extension"],
    install:{
               link:"https://chrome.google.com/webstore/detail/global-input-app/hcklienddlealndjnakkagefaelhnjkp",
            },
    startButton:"Install"

}
export default chromeExtensionConfig;
