const deviceInputTextConfig={
    title:"Device Input",
    connector:{
          title:"Connecting...",
          connectMessage:"Connecting to the WebSocket server",
          connecting:["The encryption key used for end-to-end encryption and the URL of the WebSocket server etc. are obtained from the QR Code."],
          permission:["The encryption key used for end-to-end encryption and the URL of the WebSocket server etc. are obtained from the QR Code.","The WebSocket server is connected. Now requesting permission to connect to the application..."]
    },
    registerFailed:{
        title:"Network Error",
        message:["Failed to connect to the WebSocket server. Check your network communication or check with the application provider."]
    },
    permissionDenied:{
      title:"Connection Error",
      message:["Permission to connect is denied by the application."],
      sessionDoesNotExists:["The information obtained from the QR Code is expired."]
    },
    serviceError:{
      title:"Client Application Error",
      message:["Invalid response received from the application."]
    },
    initDataMissing:{
         title:"Client Application Error",
         message:["The application has not responded with the required type of data..."]
    },
    decryptFailed:{
        title:"Decryption Error",
        message:["Failed to decrypt the data. The app does not have the encryption key that has encrypted the content."],
    },
    saveFormData:{
      title:"Session Ended",
      content1:["Would you like to save the following data?"],
      content2:["Press the \"Save\" button to save the data."]
              },
    nextDataTransfer:{
        title:"Starting Next Action",
        content1:["Would you like to save the following data before going to the next step?"],
        content2:["Press the \"Save\" button to save the data."]
    },
    sessionEnded:{
        title:"Session Ended",
        content:["The encrypted data transfer operation has ended.",
                 "Press the \"Scan\" button to start again."]
    },
    emptyFieldsReceived:{
        title:"Application Error",
        content:"Application sends an empty fields configuration"
    },
    clipboard:{
      message:["The content of the selected field is copied into your clipboard"]
    },
    formData:{
        title:"Select Data to Transfer"
    },
    clipboardCopyButton:{
         notification:"Copied into your clipboard",
         emptyClipboard:"Empty Content",
         errorConvert:"failed to parse",
    },
};
export default deviceInputTextConfig;
